const atlasData = window.cityBudgetData || [];
const atlasHelpers = window.BudgetAtlas || {};

function formatCategoryAmount(city, total, share) {
  const value = (total * share) / 100;

  if ((city.budgetUnit || 'B') === 'T' && value < 1) {
    const localValue = `${city.currencyPrefix}${(value * 1000).toFixed(0)}B`;
    if (!city.usdPerUnit) {
      return localValue;
    }

    return `${localValue} (${atlasHelpers.formatUsdBudget(value * city.usdPerUnit * 1000)} USD)`;
  }

  return atlasHelpers.formatBudget(value, city);
}

function buildSegments(city, year) {
  return year.shares
    .map((share, index) => {
      const color = city.colors[index];
      return `<span class="timeline-bar__segment" style="width:${share}%; background:${color}"></span>`;
    })
    .join('');
}

function buildLegend(city, year) {
  return city.categories
    .map((category, index) => {
      const share = year.shares[index];
      const color = city.colors[index];
      return `
        <li class="legend-list__item">
          <span class="legend-list__swatch" style="background:${color}"></span>
          <span>${category}</span>
          <strong>${share}% · ${formatCategoryAmount(city, year.total, share)}</strong>
        </li>
      `;
    })
    .join('');
}

function buildCityNav() {
  return `
    <a href="../index.html#cities">All Cities</a>
    <a href="../index.html#method">Method</a>
  `;
}

function formatLocalBudget(value, city) {
  const unit = city.budgetUnit || 'B';
  const prefix = city.currencyPrefix || '$';
  const decimals = value === 0 ? 0 : value >= 10 ? 0 : value >= 1 ? 1 : 2;
  return `${prefix}${value.toFixed(decimals)}${unit}`;
}

function formatCompactCurrency(value, city) {
  const prefix = city.currencyPrefix || '$';

  if (value >= 1000000) {
    return `${prefix}${(value / 1000000).toFixed(1)}M`;
  }

  if (value >= 1000) {
    return `${prefix}${Math.round(value / 1000)}k`;
  }

  return `${prefix}${Math.round(value)}`;
}

function getNiceStep(maxValue, tickCount) {
  if (maxValue <= 0) {
    return 1;
  }

  const rawStep = maxValue / tickCount;
  const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const residual = rawStep / magnitude;

  if (residual <= 1) {
    return magnitude;
  }

  if (residual <= 2) {
    return 2 * magnitude;
  }

  if (residual <= 5) {
    return 5 * magnitude;
  }

  return 10 * magnitude;
}

function getChartGeometry(width, height) {
  return {
    left: 68,
    right: 20,
    top: 18,
    bottom: 40,
    plotWidth: width - 88,
    plotHeight: height - 58,
  };
}

function getXCoordinate(index, totalPoints, geometry) {
  if (totalPoints === 1) {
    return geometry.left;
  }

  return geometry.left + (geometry.plotWidth * index) / (totalPoints - 1);
}

function getYCoordinate(value, maxValue, geometry) {
  const safeMax = maxValue || 1;
  return geometry.top + geometry.plotHeight - (value / safeMax) * geometry.plotHeight;
}

function buildLinePath(values, maxValue, geometry) {
  const totalPoints = values.length;

  return values
    .map((value, index) => {
      const x = getXCoordinate(index, totalPoints, geometry);
      const y = getYCoordinate(value, maxValue, geometry);
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(' ');
}

function buildAreaPath(values, maxValue, geometry) {
  const linePath = buildLinePath(values, maxValue, geometry);
  const endX = getXCoordinate(values.length - 1, values.length, geometry);
  const baselineY = geometry.top + geometry.plotHeight;

  return `${linePath} L ${endX.toFixed(2)} ${baselineY.toFixed(2)} L ${geometry.left.toFixed(2)} ${baselineY.toFixed(2)} Z`;
}

function buildYAxisTicks(maxValue, geometry, formatTick) {
  const step = getNiceStep(maxValue, 4);
  const niceMax = step * 4;
  const ticks = [];

  for (let value = 0; value <= niceMax; value += step) {
    const y = getYCoordinate(value, niceMax, geometry);
    ticks.push(`
      <g class="chart-tick">
        <line x1="${geometry.left}" y1="${y.toFixed(2)}" x2="${(geometry.left + geometry.plotWidth).toFixed(2)}" y2="${y.toFixed(2)}" class="chart-gridline" />
        <text x="${(geometry.left - 10).toFixed(2)}" y="${(y + 4).toFixed(2)}" text-anchor="end" class="chart-label">${formatTick(value)}</text>
      </g>
    `);
  }

  return {
    niceMax,
    markup: ticks.join(''),
  };
}

function buildXAxisTicks(years, geometry) {
  const tickYears = years.filter((year, index) => {
    const numericYear = Number(year.label);
    return index === 0 || index === years.length - 1 || numericYear % 5 === 0;
  });

  return tickYears
    .map((year) => {
      const index = years.findIndex((entry) => entry.label === year.label);
      const x = getXCoordinate(index, years.length, geometry);
      const axisY = geometry.top + geometry.plotHeight;

      return `
        <g class="chart-tick">
          <line x1="${x.toFixed(2)}" y1="${axisY.toFixed(2)}" x2="${x.toFixed(2)}" y2="${(axisY + 6).toFixed(2)}" class="chart-axis-marker" />
          <text x="${x.toFixed(2)}" y="${(axisY + 22).toFixed(2)}" text-anchor="middle" class="chart-label">${year.label}</text>
        </g>
      `;
    })
    .join('');
}

function buildSparkChart(city, years, valueAccessor, options) {
  const width = 560;
  const height = 260;
  const geometry = getChartGeometry(width, height);
  const values = years.map(valueAccessor);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const yAxis = buildYAxisTicks(max, geometry, options.axisFormat);
  const linePath = buildLinePath(values, yAxis.niceMax, geometry);
  const areaPath = buildAreaPath(values, yAxis.niceMax, geometry);
  const xAxisTicks = buildXAxisTicks(years, geometry);
  const startLabel = years[0].label;
  const endLabel = years[years.length - 1].label;
  const axisY = geometry.top + geometry.plotHeight;

  return `
    <article class="chart-card reveal">
      <div class="chart-card__header">
        <div>
          <p class="eyebrow">${options.kicker}</p>
          <h2>${options.title}</h2>
        </div>
        <p class="chart-card__range">${options.format(max)} high · ${options.format(min)} low</p>
      </div>
      <svg class="chart-card__svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${options.title} from ${startLabel} to ${endLabel}">
        ${yAxis.markup}
        <line x1="${geometry.left}" y1="${geometry.top}" x2="${geometry.left}" y2="${axisY}" class="chart-axis" />
        <line x1="${geometry.left}" y1="${axisY}" x2="${(geometry.left + geometry.plotWidth).toFixed(2)}" y2="${axisY}" class="chart-axis" />
        <path d="${areaPath}" class="chart-area" style="fill:${options.fill}" />
        <path d="${linePath}" class="chart-line" style="stroke:${options.stroke}" />
        ${xAxisTicks}
      </svg>
      <div class="chart-card__footer">
        <span>${startLabel}</span>
        <strong>${options.format(values[values.length - 1])}</strong>
        <span>${endLabel}</span>
      </div>
    </article>
  `;
}

function renderCityPage() {
  const pageRoot = document.querySelector('#city-page');
  const navRoot = document.querySelector('.site-nav');

  if (!pageRoot) {
    return;
  }

  const slug = document.body.dataset.city;
  const city = atlasData.find((entry) => entry.slug === slug);

  if (!city) {
    pageRoot.innerHTML = `
      <section class="empty-state reveal is-visible">
        <p class="eyebrow">Missing City</p>
        <h1>No budget page was found for this route.</h1>
        <a class="button button--primary" href="../index.html">Back To Atlas</a>
      </section>
    `;
    return;
  }

  const chronologicalYears = [...city.years].sort((left, right) => Number(left.label) - Number(right.label));
  const reverseChronologicalYears = [...chronologicalYears].reverse();
  const firstYear = chronologicalYears[0];
  const latestYear = chronologicalYears[chronologicalYears.length - 1];
  const growth = ((latestYear.total - firstYear.total) / firstYear.total) * 100;
  const largestShare = Math.max(...latestYear.shares);
  const largestCategory = city.categories[latestYear.shares.indexOf(largestShare)];

  if (navRoot) {
    navRoot.innerHTML = buildCityNav();
  }

  pageRoot.innerHTML = `
    <section class="city-hero reveal">
      <div class="city-hero__copy">
        <p class="eyebrow">${city.city}, ${city.state}</p>
        <h1>${city.pageTitle}</h1>
        <p class="city-hero__summary">${city.summary}</p>
        <div class="city-hero__chips">
          <span class="chip">2025 total ${atlasHelpers.formatBudget(latestYear.total, city)}</span>
          <span class="chip">2025 per resident ${atlasHelpers.formatPerResident(latestYear.total, latestYear.populationMil, city)}</span>
          <span class="chip">2000-2025 change ${growth > 0 ? '+' : ''}${growth.toFixed(1)}%</span>
          <span class="chip">Largest 2025 bucket ${largestCategory}</span>
        </div>
      </div>
      <aside class="city-hero__note">
        <p class="panel-kicker">Budget basis</p>
        <p>${city.budgetBasis}</p>
        <p>${city.fiscalNote}</p>
      </aside>
    </section>

    <section class="chart-grid">
      ${buildSparkChart(
        city,
        chronologicalYears,
        (year) => year.total,
        {
          kicker: 'Budget Trend',
          title: 'Total budget, 2000-2025',
          stroke: city.colors[0],
          fill: 'rgba(159, 77, 39, 0.14)',
          format: (value) => atlasHelpers.formatBudget(value, city),
          axisFormat: (value) => formatLocalBudget(value, city),
        }
      )}
      ${buildSparkChart(
        city,
        chronologicalYears,
        (year) => (year.total * (city.budgetUnit === 'T' ? 1000000 : 1000)) / year.populationMil,
        {
          kicker: 'Resident Scale',
          title: 'Per resident, 2000-2025',
          stroke: city.colors[3],
          fill: 'rgba(47, 127, 118, 0.14)',
          format: (value) => `${city.currencyPrefix}${Math.round(value).toLocaleString()}`,
          axisFormat: (value) => formatCompactCurrency(value, city),
        }
      )}
    </section>

    <section class="section-block">
      <div class="section-heading reveal">
        <p class="eyebrow">Timeline</p>
        <h2>Budget cycles from 2000 through 2025.</h2>
        <p>
          Each row shows the total city budget for the year and a rough split across
          five high-level categories. Rows are shown in reverse chronological order.
        </p>
      </div>
      <div class="timeline-grid">
        ${reverseChronologicalYears
          .map(
            (year) => `
              <article class="timeline-card reveal">
                <div class="timeline-card__header">
                  <div>
                    <p class="timeline-card__year">${year.label}</p>
                    <h3>${atlasHelpers.formatBudget(year.total, city)}</h3>
                    <p class="timeline-card__meta">${atlasHelpers.formatPerResident(year.total, year.populationMil, city)} per resident · ${atlasHelpers.formatPopulation(year.populationMil)}${year.estimated ? ' · estimated' : ''}</p>
                  </div>
                  <span class="timeline-card__share">${Math.max(...year.shares)}% top share</span>
                </div>
                <div class="timeline-bar" aria-hidden="true">
                  ${buildSegments(city, year)}
                </div>
                <ul class="legend-list">
                  ${buildLegend(city, year)}
                </ul>
              </article>
            `
          )
          .join('')}
      </div>
    </section>

    <section class="section-block section-block--split">
      <div class="detail-panel reveal">
        <p class="eyebrow">Readout</p>
        <h2>What stands out in this city.</h2>
        <ul class="bullet-list">
          <li>${city.city} moved from ${atlasHelpers.formatBudget(firstYear.total, city)} in 2000 to ${atlasHelpers.formatBudget(latestYear.total, city)} in 2025.</li>
          <li>Estimated spending per resident moved from ${atlasHelpers.formatPerResident(firstYear.total, firstYear.populationMil, city)} to ${atlasHelpers.formatPerResident(latestYear.total, latestYear.populationMil, city)} over the same span.</li>
          <li>${largestCategory} is the biggest normalized category in the latest year at ${largestShare}%.</li>
          <li>The mix is rounded, and pre-2020 rows are backfilled estimates anchored to the published 2020-2025 series used by this atlas.</li>
        </ul>
      </div>
      <div class="detail-panel reveal">
        <p class="eyebrow">Source Trail</p>
        <h2>How to verify the rough view.</h2>
        <ul class="bullet-list">
          ${city.sourceTrail.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    </section>
  `;

  if (atlasHelpers.revealElements) {
    atlasHelpers.revealElements();
  }
}

renderCityPage();
