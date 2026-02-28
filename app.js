const cityData = window.cityBudgetData || [];

function getBudgetUnit(city) {
  return city.budgetUnit || 'B';
}

function getBudgetMagnitude(city) {
  return getBudgetUnit(city) === 'T' ? 1000000 : 1000;
}

function getUsdBudgetBillions(value, city) {
  if (!city.usdPerUnit) {
    return null;
  }

  const budgetScale = getBudgetUnit(city) === 'T' ? 1000 : 1;
  return value * city.usdPerUnit * budgetScale;
}

function formatUsdBudget(value) {
  if (value >= 10) {
    return `$${value.toFixed(1)}B`;
  }

  if (value >= 1) {
    return `$${value.toFixed(2)}B`;
  }

  return `$${Math.round(value * 1000).toLocaleString()}M`;
}

function formatBudget(value, city) {
  const unit = getBudgetUnit(city);
  const prefix = city.currencyPrefix || '$';
  const decimals = value >= 10 ? 1 : 2;
  const localValue = `${prefix}${value.toFixed(decimals)}${unit}`;
  const usdValue = getUsdBudgetBillions(value, city);

  if (!usdValue) {
    return localValue;
  }

  return `${localValue} (${formatUsdBudget(usdValue)} USD)`;
}

function formatDelta(value) {
  const sign = value > 0 ? '+' : '';
  return `${sign}${value.toFixed(1)}%`;
}

function formatPerResident(total, populationMil, city) {
  const perResident = (total * getBudgetMagnitude(city)) / populationMil;
  const prefix = city.currencyPrefix || '$';
  const localValue = `${prefix}${Math.round(perResident).toLocaleString()}`;

  if (!city.usdPerUnit) {
    return localValue;
  }

  return `${localValue} ($${Math.round(perResident * city.usdPerUnit).toLocaleString()} USD)`;
}

function formatPopulation(populationMil) {
  return `${populationMil.toFixed(2)}M residents`;
}

function revealElements() {
  const revealTargets = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window) || revealTargets.length === 0) {
    revealTargets.forEach((element) => {
      element.classList.add('is-visible');
    });
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealTargets.forEach((element) => {
    revealObserver.observe(element);
  });
}

function renderCityCards() {
  const cityGrid = document.querySelector('#city-grid');

  if (!cityGrid || cityData.length === 0) {
    return;
  }

  cityGrid.innerHTML = cityData
    .map((city) => {
      const sortedYears = [...city.years].sort((left, right) => Number(right.label) - Number(left.label));
      const firstYear = city.years[0];
      const latestYear = sortedYears[0];
      const growth = ((latestYear.total - firstYear.total) / firstYear.total) * 100;
      const topShare = Math.max(...latestYear.shares);
      const topCategory = city.categories[latestYear.shares.indexOf(topShare)];

      return `
        <article class="city-card reveal">
          <p class="city-card__eyebrow">${city.city}, ${city.state}</p>
          <h3>${city.pageTitle}</h3>
          <p class="city-card__summary">${city.summary}</p>
          <dl class="city-card__stats">
            <div>
              <dt>2025 total</dt>
              <dd>${formatBudget(latestYear.total, city)}</dd>
            </div>
            <div>
              <dt>2000-2025 change</dt>
              <dd>${formatDelta(growth)}</dd>
            </div>
            <div>
              <dt>2025 per resident</dt>
              <dd>${formatPerResident(latestYear.total, latestYear.populationMil, city)}</dd>
            </div>
            <div>
              <dt>Largest 2025 bucket</dt>
              <dd>${topCategory}</dd>
            </div>
          </dl>
          <a class="button button--primary" href="cities/${city.slug}.html">Open City Page</a>
        </article>
      `;
    })
    .join('');
}

renderCityCards();
revealElements();

window.BudgetAtlas = {
  formatBudget,
  formatPerResident,
  formatPopulation,
  formatUsdBudget,
  revealElements,
};
