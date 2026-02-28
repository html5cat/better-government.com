const atlasData = window.cityBudgetData || [];
const atlasHelpers = window.BudgetAtlas || {};

function formatCategoryAmount(total, share) {
  const value = (total * share) / 100;

  if (value >= 1) {
    return `$${value.toFixed(1)}B`;
  }

  return `$${(value * 1000).toFixed(0)}M`;
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
          <strong>${share}% · ${formatCategoryAmount(year.total, share)}</strong>
        </li>
      `;
    })
    .join('');
}

function renderCityPage() {
  const pageRoot = document.querySelector('#city-page');

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

  const firstYear = city.years[0];
  const latestYear = city.years[city.years.length - 1];
  const growth = ((latestYear.total - firstYear.total) / firstYear.total) * 100;
  const largestShare = Math.max(...latestYear.shares);
  const largestCategory = city.categories[latestYear.shares.indexOf(largestShare)];

  pageRoot.innerHTML = `
    <section class="city-hero reveal">
      <div class="city-hero__copy">
        <p class="eyebrow">${city.city}, ${city.state}</p>
        <h1>${city.pageTitle}</h1>
        <p class="city-hero__summary">${city.summary}</p>
        <div class="city-hero__chips">
          <span class="chip">2025 total ${atlasHelpers.formatBudget(latestYear.total)}</span>
          <span class="chip">2020-2025 change ${growth > 0 ? '+' : ''}${growth.toFixed(1)}%</span>
          <span class="chip">Largest 2025 bucket ${largestCategory}</span>
        </div>
      </div>
      <aside class="city-hero__note">
        <p class="panel-kicker">Budget basis</p>
        <p>${city.budgetBasis}</p>
        <p>${city.fiscalNote}</p>
      </aside>
    </section>

    <section class="section-block">
      <div class="section-heading reveal">
        <p class="eyebrow">Timeline</p>
        <h2>Budget cycles from 2020 through 2025.</h2>
        <p>
          Each row shows the total city budget for the year and a rough split across
          five high-level categories.
        </p>
      </div>
      <div class="timeline-grid">
        ${city.years
          .map(
            (year) => `
              <article class="timeline-card reveal">
                <div class="timeline-card__header">
                  <div>
                    <p class="timeline-card__year">${year.label}</p>
                    <h3>${atlasHelpers.formatBudget(year.total)}</h3>
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
          <li>${city.city} moved from ${atlasHelpers.formatBudget(firstYear.total)} in 2020 to ${atlasHelpers.formatBudget(latestYear.total)} in 2025.</li>
          <li>${largestCategory} is the biggest normalized category in the latest year at ${largestShare}%.</li>
          <li>The mix is rounded so readers can compare broad civic priorities without wading through hundreds of budget line items.</li>
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
