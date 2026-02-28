const cityBudgetSeedData = [
  {
    slug: 'san-francisco',
    city: 'San Francisco',
    state: 'California',
    currencyPrefix: '$',
    budgetUnit: 'B',
    shortLabel: 'SF',
    pageTitle: 'San Francisco Budget',
    summary:
      'A high-spend coastal city budget shaped by public health, homelessness response, transit recovery, public safety, and citywide labor costs.',
    fiscalNote:
      'San Francisco labels budgets by fiscal year pairs. The atlas maps each budget to its ending year, so 2025 corresponds to FY2024-25.',
    budgetBasis:
      'Totals reflect adopted all-department budgets in billions of dollars. Category shares are rough normalized groupings that compress departmental detail into broad public-facing buckets.',
    colors: ['#8e3b1f', '#d17b35', '#efb458', '#3f7a86', '#243147'],
    categories: [
      'Public health, housing & human services',
      'Public safety & emergency response',
      'Transit, streets & public works',
      'Children, culture & neighborhood services',
      'Administration, debt & citywide ops',
    ],
    sourceTrail: [
      'San Francisco Mayor budget books and annual appropriation materials',
      '2020 maps to the FY2019-20 budget; 2025 maps to the FY2024-25 adopted budget',
      'Category shares are rounded after hand-grouping departments and citywide cost centers',
    ],
    years: [
      { label: '2020', total: 12.3, populationMil: 0.875, shares: [29, 18, 17, 11, 25] },
      { label: '2021', total: 13.1, populationMil: 0.874, shares: [30, 18, 16, 11, 25] },
      { label: '2022', total: 14.0, populationMil: 0.864, shares: [31, 17, 16, 11, 25] },
      { label: '2023', total: 14.6, populationMil: 0.852, shares: [31, 17, 16, 11, 25] },
      { label: '2024', total: 15.3, populationMil: 0.844, shares: [31, 17, 15, 11, 26] },
      { label: '2025', total: 15.9, populationMil: 0.840, shares: [32, 17, 15, 10, 26] },
    ],
  },
  {
    slug: 'new-york',
    city: 'New York City',
    state: 'New York',
    currencyPrefix: '$',
    budgetUnit: 'B',
    shortLabel: 'NYC',
    pageTitle: 'New York City Budget',
    summary:
      'The country’s largest city budget, with the heaviest weight in education, social services, labor costs, debt, and other citywide obligations.',
    fiscalNote:
      'NYC uses fiscal years labeled by their end year, so FY2020 through FY2025 already match the 2020-2025 timeline shown here.',
    budgetBasis:
      'Totals reflect adopted city budgets in billions of dollars. Mix percentages are normalized from broad city service areas and citywide cost items.',
    colors: ['#9f4d27', '#d48a45', '#2f7f76', '#516f9c', '#2a2e42'],
    categories: [
      'Education & youth',
      'Health, housing & social services',
      'Public safety & justice',
      'Transit, sanitation & streets',
      'Labor, debt & citywide ops',
    ],
    sourceTrail: [
      'NYC Comptroller adopted budget comments for FY2020-FY2025',
      'NYC budget totals use official adopted-budget headline figures',
      'Category grouping is hand-normalized from agency and citywide spending sections',
    ],
    years: [
      { label: '2020', total: 92.8, populationMil: 8.805, shares: [25, 17, 15, 14, 29] },
      { label: '2021', total: 88.2, populationMil: 8.795, shares: [24, 18, 15, 14, 29] },
      { label: '2022', total: 98.7, populationMil: 8.468, shares: [26, 17, 15, 13, 29] },
      { label: '2023', total: 101.1, populationMil: 8.436, shares: [26, 18, 15, 13, 28] },
      { label: '2024', total: 107.1, populationMil: 8.404, shares: [27, 17, 15, 13, 28] },
      { label: '2025', total: 112.4, populationMil: 8.390, shares: [27, 17, 15, 12, 29] },
    ],
  },
  {
    slug: 'los-angeles',
    city: 'Los Angeles',
    state: 'California',
    currencyPrefix: '$',
    budgetUnit: 'B',
    shortLabel: 'LA',
    pageTitle: 'Los Angeles Budget',
    summary:
      'A large all-funds budget centered on public safety, mobility, public works, housing pressure, and rising citywide obligations.',
    fiscalNote:
      'Los Angeles budgets span two calendar years. The atlas labels each cycle by its ending year, so 2025 corresponds to the FY2024-25 budget.',
    budgetBasis:
      'Totals reflect official all-funds budget summary figures in billions of dollars. Category shares are rough groupings from city priorities and citywide cost sections.',
    colors: ['#7f2a1d', '#c2642f', '#f1b256', '#3a6f85', '#26354f'],
    categories: [
      'Public safety',
      'Mobility & public works',
      'Housing & homelessness',
      'Culture, recreation & neighborhood services',
      'Administration, pensions & debt',
    ],
    sourceTrail: [
      'Los Angeles City Administrative Officer budget summary booklets',
      '2020 uses the FY2019-20 adopted figure; 2025 uses the FY2024-25 adopted figure',
      'Breakdown percentages are rounded and normalized for comparison across years',
    ],
    years: [
      { label: '2020', total: 10.71, populationMil: 3.899, shares: [31, 20, 11, 14, 24] },
      { label: '2021', total: 10.53, populationMil: 3.898, shares: [32, 19, 11, 14, 24] },
      { label: '2022', total: 11.48, populationMil: 3.849, shares: [32, 19, 12, 13, 24] },
      { label: '2023', total: 11.78, populationMil: 3.822, shares: [31, 20, 13, 13, 23] },
      { label: '2024', total: 13.15, populationMil: 3.808, shares: [30, 21, 14, 13, 22] },
      { label: '2025', total: 12.9, populationMil: 3.793, shares: [30, 21, 15, 12, 22] },
    ],
  },
  {
    slug: 'chicago',
    city: 'Chicago',
    state: 'Illinois',
    currencyPrefix: '$',
    budgetUnit: 'B',
    shortLabel: 'Chicago',
    pageTitle: 'Chicago Budget',
    summary:
      'Chicago runs a large all-funds budget shaped by public safety, pensions, transit support, neighborhood services, and citywide infrastructure obligations.',
    fiscalNote:
      'Chicago labels the budget by calendar year. The atlas uses the same year labels for 2020 through 2025.',
    budgetBasis:
      'Totals reflect rough all-funds budget levels in billions of dollars, normalized from annual budget books and budget-overview materials into five comparison buckets.',
    colors: ['#7e2f21', '#b85c36', '#df9a58', '#4d738f', '#26354d'],
    categories: [
      'Public safety & justice',
      'Pensions, debt & citywide finance',
      'Transit, streets & infrastructure',
      'Housing, health & neighborhood services',
      'Administration, labor & other ops',
    ],
    sourceTrail: [
      'City of Chicago annual budget books and budget-overview materials for 2020-2025',
      'Totals are rough all-funds levels rather than a single audited spending base',
      'Category shares are hand-normalized to compare Chicago with other cities in the atlas',
    ],
    years: [
      { label: '2020', total: 11.65, populationMil: 2.747, shares: [28, 24, 16, 12, 20] },
      { label: '2021', total: 12.76, populationMil: 2.733, shares: [27, 25, 16, 12, 20] },
      { label: '2022', total: 16.73, populationMil: 2.696, shares: [24, 23, 17, 15, 21] },
      { label: '2023', total: 16.77, populationMil: 2.665, shares: [24, 23, 17, 15, 21] },
      { label: '2024', total: 16.62, populationMil: 2.640, shares: [24, 23, 17, 15, 21] },
      { label: '2025', total: 17.10, populationMil: 2.617, shares: [24, 24, 17, 14, 21] },
    ],
  },
  {
    slug: 'philadelphia',
    city: 'Philadelphia',
    state: 'Pennsylvania',
    currencyPrefix: '$',
    budgetUnit: 'B',
    shortLabel: 'Philly',
    pageTitle: 'Philadelphia Budget',
    summary:
      'Philadelphia’s budget emphasizes public safety, education-linked obligations, neighborhood services, housing and health programs, and labor reserves.',
    fiscalNote:
      'Philadelphia uses fiscal years labeled by their end year, so FY2020 through FY2025 map directly to the 2020-2025 timeline shown here.',
    budgetBasis:
      'Totals reflect rough city operating and capital budget levels in billions of dollars, simplified into five reader-friendly spending buckets.',
    colors: ['#8b3b1c', '#c66b33', '#e8ae63', '#3d7e78', '#2a3347'],
    categories: [
      'Public safety & justice',
      'Health, housing & human services',
      'Streets, sanitation & transit support',
      'Parks, education support & neighborhood services',
      'Administration, labor reserves & debt',
    ],
    sourceTrail: [
      'City of Philadelphia budget highlights, five-year plans, and capital-program materials',
      'FY2025 uses the city-approved One Philly budget level; earlier years are rough headline budget figures',
      'Mix percentages are rounded to make Philadelphia comparable with the rest of the atlas',
    ],
    years: [
      { label: '2020', total: 5.30, populationMil: 1.585, shares: [30, 18, 12, 14, 26] },
      { label: '2021', total: 5.57, populationMil: 1.577, shares: [29, 19, 12, 14, 26] },
      { label: '2022', total: 5.80, populationMil: 1.576, shares: [29, 19, 12, 14, 26] },
      { label: '2023', total: 5.94, populationMil: 1.568, shares: [29, 19, 12, 14, 26] },
      { label: '2024', total: 6.12, populationMil: 1.551, shares: [28, 20, 12, 14, 26] },
      { label: '2025', total: 6.37, populationMil: 1.547, shares: [28, 20, 12, 14, 26] },
    ],
  },
  {
    slug: 'phoenix',
    city: 'Phoenix',
    state: 'Arizona',
    currencyPrefix: '$',
    budgetUnit: 'B',
    shortLabel: 'Phoenix',
    pageTitle: 'Phoenix Budget',
    summary:
      'Phoenix combines a large general fund with major aviation, water, wastewater, transit, and public-safety operations, producing a broad operating-fund footprint.',
    fiscalNote:
      'Phoenix budgets span two calendar years. The atlas labels each cycle by its ending year, so 2025 corresponds to the FY2024-25 budget.',
    budgetBasis:
      'Totals reflect official City of Phoenix operating-fund totals from annual Schedule 1 budget documents, converted to billions of dollars for the atlas.',
    colors: ['#7f2d17', '#b55b2d', '#e09c4f', '#3d768a', '#273247'],
    categories: [
      'Public safety',
      'Water, wastewater & aviation enterprise',
      'Transit, streets & capital support',
      'Parks, libraries & neighborhood services',
      'Administration, solid waste & other ops',
    ],
    sourceTrail: [
      'City of Phoenix Budget Library Schedule 1 operating-fund documents for FY2019-20 through FY2024-25',
      'The yearly totals here come from official operating-fund schedules rather than a separate atlas estimate',
      'Bucket shares are normalized from major fund and service clusters for readability',
    ],
    years: [
      { label: '2020', total: 5.05, populationMil: 1.681, shares: [24, 34, 15, 9, 18] },
      { label: '2021', total: 5.70, populationMil: 1.694, shares: [24, 34, 14, 9, 19] },
      { label: '2022', total: 6.35, populationMil: 1.707, shares: [24, 33, 15, 9, 19] },
      { label: '2023', total: 7.03, populationMil: 1.624, shares: [23, 34, 15, 9, 19] },
      { label: '2024', total: 8.03, populationMil: 1.650, shares: [23, 34, 15, 9, 19] },
      { label: '2025', total: 8.86, populationMil: 1.671, shares: [23, 34, 15, 9, 19] },
    ],
  },
  {
    slug: 'tokyo',
    city: 'Tokyo',
    state: 'Japan',
    currencyPrefix: 'JPY ',
    budgetUnit: 'T',
    usdPerUnit: 0.00648,
    shortLabel: 'Tokyo',
    pageTitle: 'Tokyo Budget',
    summary:
      'Tokyo Metropolitan Government runs one of the world’s largest city-scale budgets, with major weight in welfare, infrastructure, schools, disaster readiness, and metropolitan administration.',
    fiscalNote:
      'Tokyo budgets are usually discussed by Japanese fiscal year. The atlas maps each budget to its ending calendar year, so 2025 corresponds to FY2024-25.',
    budgetBasis:
      'Totals are rough Tokyo Metropolitan Government general-account budget levels in trillions of yen, simplified into five comparison buckets.',
    colors: ['#7b2d1b', '#b65d35', '#df9955', '#3f7589', '#243247'],
    categories: [
      'Health, welfare & housing',
      'Transport, infrastructure & resilience',
      'Education, culture & youth',
      'Police, fire & disaster response',
      'Administration, debt & metro-wide ops',
    ],
    sourceTrail: [
      'Tokyo Metropolitan Government annual budget outlines and fiscal materials',
      '2024 and 2025 follow official headline totals reported for the metropolitan general account',
      'Category shares are rounded after grouping large bureau-level appropriations',
    ],
    years: [
      { label: '2020', total: 7.35, populationMil: 13.97, shares: [28, 24, 14, 12, 22] },
      { label: '2021', total: 7.45, populationMil: 13.98, shares: [29, 23, 14, 12, 22] },
      { label: '2022', total: 7.80, populationMil: 14.00, shares: [29, 23, 14, 12, 22] },
      { label: '2023', total: 8.04, populationMil: 14.04, shares: [30, 23, 13, 12, 22] },
      { label: '2024', total: 8.45, populationMil: 14.08, shares: [30, 23, 13, 12, 22] },
      { label: '2025', total: 9.16, populationMil: 14.11, shares: [31, 22, 13, 12, 22] },
    ],
  },
  {
    slug: 'kyoto',
    city: 'Kyoto',
    state: 'Japan',
    currencyPrefix: 'JPY ',
    budgetUnit: 'T',
    usdPerUnit: 0.00648,
    shortLabel: 'Kyoto',
    pageTitle: 'Kyoto Budget',
    summary:
      'Kyoto’s budget mixes tourism-linked city services with transit, welfare, schools, climate work, and the fiscal pressure of maintaining an older urban fabric.',
    fiscalNote:
      'Kyoto City budgets are mapped by their ending fiscal year, so the 2025 row corresponds to the FY2024-25 budget cycle.',
    budgetBasis:
      'Totals are rough Kyoto City budget levels in trillions of yen, normalized from city budget summaries into five broad service categories.',
    colors: ['#8c341b', '#c46d36', '#e6a960', '#3a7d78', '#2a3247'],
    categories: [
      'Health, welfare & community support',
      'Transit, streets & urban maintenance',
      'Education, culture & tourism',
      'Climate, environment & disaster readiness',
      'Administration, debt & citywide ops',
    ],
    sourceTrail: [
      'Kyoto City annual budget overview materials and fiscal summaries',
      'The totals are directional headline budget levels rather than an audited spending base',
      'Category shares are rounded to keep Kyoto comparable with larger atlas cities',
    ],
    years: [
      { label: '2020', total: 0.99, populationMil: 1.46, shares: [31, 22, 14, 9, 24] },
      { label: '2021', total: 1.02, populationMil: 1.46, shares: [32, 21, 13, 9, 25] },
      { label: '2022', total: 1.04, populationMil: 1.45, shares: [32, 21, 13, 9, 25] },
      { label: '2023', total: 1.08, populationMil: 1.45, shares: [32, 21, 13, 9, 25] },
      { label: '2024', total: 1.10, populationMil: 1.44, shares: [33, 20, 13, 9, 25] },
      { label: '2025', total: 1.12, populationMil: 1.43, shares: [33, 20, 13, 9, 25] },
    ],
  },
  {
    slug: 'vancouver',
    city: 'Vancouver',
    state: 'British Columbia, Canada',
    currencyPrefix: 'C$',
    budgetUnit: 'B',
    usdPerUnit: 0.7376,
    shortLabel: 'Vancouver',
    pageTitle: 'Vancouver Budget',
    summary:
      'Vancouver’s operating budget reflects policing, engineering, parks, housing pressure, and rising utility and climate-resilience costs.',
    fiscalNote:
      'Vancouver budget books often separate operating, capital, and utility plans. The atlas uses rough operating-budget headline totals labeled by calendar year.',
    budgetBasis:
      'Totals are rough City of Vancouver operating-budget levels in billions of Canadian dollars, grouped into five broad service buckets.',
    colors: ['#7f311c', '#ba6332', '#e1a55f', '#3e768a', '#283449'],
    categories: [
      'Police, fire & public safety',
      'Engineering, utilities & climate resilience',
      'Housing, planning & community services',
      'Parks, recreation & libraries',
      'Administration, debt & other ops',
    ],
    sourceTrail: [
      'City of Vancouver annual operating budget pages, presentations, and council reports',
      '2024 and 2025 use official budget figures published by the city; earlier years are rough headline operating totals',
      'Bucket shares are rounded after grouping operating departments and utilities support',
    ],
    years: [
      { label: '2020', total: 1.62, populationMil: 0.66, shares: [23, 27, 18, 12, 20] },
      { label: '2021', total: 1.60, populationMil: 0.67, shares: [23, 27, 18, 12, 20] },
      { label: '2022', total: 1.74, populationMil: 0.68, shares: [23, 28, 18, 12, 19] },
      { label: '2023', total: 1.97, populationMil: 0.68, shares: [23, 28, 18, 12, 19] },
      { label: '2024', total: 2.20, populationMil: 0.69, shares: [22, 29, 18, 12, 19] },
      { label: '2025', total: 2.34, populationMil: 0.70, shares: [22, 29, 18, 12, 19] },
    ],
  },
  {
    slug: 'lisbon',
    city: 'Lisbon',
    state: 'Portugal',
    currencyPrefix: 'EUR ',
    budgetUnit: 'B',
    usdPerUnit: 1.1885,
    shortLabel: 'Lisbon',
    pageTitle: 'Lisbon Budget',
    summary:
      'Lisbon combines urban mobility, housing pressure, sanitation, public-space investment, and social support in a relatively compact municipal budget.',
    fiscalNote:
      'Lisbon budgets are shown by calendar year. The atlas uses rough municipal headline budgets for 2020 through 2025.',
    budgetBasis:
      'Totals are rough Lisbon municipal budget levels in billions of euros, simplified into five broad civic spending buckets.',
    colors: ['#8f391d', '#c97238', '#ebb367', '#3b7b73', '#2a3348'],
    categories: [
      'Housing, social support & public health',
      'Mobility, sanitation & public space',
      'Urban development & climate works',
      'Culture, education & neighborhood life',
      'Administration, debt & citywide ops',
    ],
    sourceTrail: [
      'Lisbon municipal budget presentations and annual city budget announcements',
      'The yearly totals are rough headline budget levels rather than a harmonized audited series',
      'Category shares are rounded to make Lisbon readable alongside much larger cities',
    ],
    years: [
      { label: '2020', total: 1.05, populationMil: 0.55, shares: [24, 24, 18, 12, 22] },
      { label: '2021', total: 1.14, populationMil: 0.55, shares: [24, 24, 18, 12, 22] },
      { label: '2022', total: 1.21, populationMil: 0.55, shares: [25, 24, 18, 12, 21] },
      { label: '2023', total: 1.29, populationMil: 0.54, shares: [25, 24, 18, 12, 21] },
      { label: '2024', total: 1.35, populationMil: 0.54, shares: [25, 24, 18, 12, 21] },
      { label: '2025', total: 1.47, populationMil: 0.54, shares: [25, 24, 18, 12, 21] },
    ],
  },
  {
    slug: 'london',
    city: 'London',
    state: 'United Kingdom',
    currencyPrefix: 'GBP ',
    budgetUnit: 'B',
    usdPerUnit: 1.3729,
    shortLabel: 'London',
    pageTitle: 'London Budget',
    summary:
      'The Greater London Authority group budget is dominated by transport, policing, fire, housing and major capital investment across the capital.',
    fiscalNote:
      'London budget cycles span two calendar years. The atlas labels each budget by its ending year, so 2025 corresponds to the 2024-25 cycle.',
    budgetBasis:
      'Totals are rough Greater London Authority group-budget levels in billions of pounds, normalized into five broad spending buckets.',
    colors: ['#7a2c1a', '#b75b31', '#dd9b55', '#48738f', '#273247'],
    categories: [
      'Transport for London & mobility',
      'Police, fire & resilience',
      'Housing, regeneration & environment',
      'Economic development & community services',
      'Administration, debt & capital financing',
    ],
    sourceTrail: [
      'Greater London Authority draft and final consolidated budget documents',
      '2024 and 2025 follow official GLA group expenditure headlines; earlier years are rough consolidated-budget levels',
      'Category shares are hand-grouped from major functional bodies for comparability',
    ],
    years: [
      { label: '2020', total: 17.4, populationMil: 8.96, shares: [43, 17, 11, 6, 23] },
      { label: '2021', total: 19.3, populationMil: 8.98, shares: [44, 16, 11, 6, 23] },
      { label: '2022', total: 19.0, populationMil: 8.93, shares: [43, 17, 11, 6, 23] },
      { label: '2023', total: 19.4, populationMil: 8.89, shares: [43, 17, 11, 6, 23] },
      { label: '2024', total: 20.7, populationMil: 8.87, shares: [42, 17, 12, 6, 23] },
      { label: '2025', total: 20.4, populationMil: 8.90, shares: [42, 17, 12, 6, 23] },
    ],
  },
  {
    slug: 'paris',
    city: 'Paris',
    state: 'France',
    currencyPrefix: 'EUR ',
    budgetUnit: 'B',
    usdPerUnit: 1.1885,
    shortLabel: 'Paris',
    pageTitle: 'Paris Budget',
    summary:
      'Paris combines large social-service and public-space obligations with transport support, climate adaptation, schooling, culture, and debt-heavy capital investment.',
    fiscalNote:
      'Paris budget documents distinguish operating and investment sections. The atlas uses rough annual total expenditure levels labeled by calendar year.',
    budgetBasis:
      'Totals are rough City of Paris budget levels in billions of euros, combining operating and investment spending into five broad comparison buckets.',
    colors: ['#84321c', '#bf6535', '#e4a65e', '#3e7a78', '#283347'],
    categories: [
      'Social solidarity, housing & health',
      'Streets, mobility & climate adaptation',
      'Schools, culture & youth',
      'Safety, sanitation & neighborhood services',
      'Administration, debt & capital financing',
    ],
    sourceTrail: [
      'Ville de Paris budget primitif materials and annual council budget presentations',
      '2023 through 2025 align with published budget-expenditure headlines; 2020 through 2022 are rough totals built from official budget sections',
      'Category shares are normalized from major policy blocks and financing items',
    ],
    years: [
      { label: '2020', total: 9.75, populationMil: 2.15, shares: [25, 17, 15, 12, 31] },
      { label: '2021', total: 9.85, populationMil: 2.15, shares: [25, 17, 15, 12, 31] },
      { label: '2022', total: 10.0, populationMil: 2.14, shares: [25, 18, 15, 12, 30] },
      { label: '2023', total: 10.4, populationMil: 2.13, shares: [25, 18, 15, 12, 30] },
      { label: '2024', total: 11.0, populationMil: 2.11, shares: [25, 18, 15, 12, 30] },
      { label: '2025', total: 11.0, populationMil: 2.10, shares: [25, 18, 15, 12, 30] },
    ],
  },
];

function clampShare(value) {
  return Math.max(6, Math.min(42, value));
}

function roundShares(shares) {
  const rounded = shares.map((value) => Math.round(value));
  const total = rounded.reduce((sum, value) => sum + value, 0);
  const diff = 100 - total;

  if (diff !== 0) {
    let targetIndex = 0;
    for (let index = 1; index < rounded.length; index += 1) {
      if (rounded[index] > rounded[targetIndex]) {
        targetIndex = index;
      }
    }

    rounded[targetIndex] += diff;
  }

  return rounded;
}

function interpolateShares(baseShares, progress, directionBias) {
  const adjusted = baseShares.map((share, index) => {
    const variance = ((index % 2 === 0 ? -1 : 1) * directionBias * progress) / 2;
    return clampShare(share + variance);
  });

  return roundShares(adjusted);
}

function buildHistoricalYears(city) {
  const anchorStart = city.years[0];
  const anchorEnd = city.years[city.years.length - 1];
  const totalGrowth = anchorEnd.total / anchorStart.total;
  const historicalYears = [];

  for (let year = 2019; year >= 2000; year -= 1) {
    const distance = 2020 - year;
    const decay = Math.pow(totalGrowth, 0.32 * distance);
    const total = anchorStart.total / decay;
    const populationDelta = anchorStart.populationMil - anchorEnd.populationMil;
    const populationMil = anchorStart.populationMil + (populationDelta / 5) * distance;
    const progress = distance / 20;
    const shares = interpolateShares(
      anchorStart.shares,
      progress,
      city.shareTrendBias || 1.2
    );

    historicalYears.push({
      label: String(year),
      total: Number(total.toFixed(2)),
      populationMil: Number(populationMil.toFixed(3)),
      shares,
      estimated: true,
    });
  }

  return historicalYears.reverse();
}

function expandCityYears(city) {
  const historicalYears = buildHistoricalYears(city);
  const anchorYears = city.years.map((year) => ({
    ...year,
    estimated: false,
  }));

  return {
    ...city,
    sourceTrail: [
      ...city.sourceTrail,
      ...(city.usdPerUnit
        ? [
            'USD equivalents use fixed Federal Reserve H.10 reference rates from the January 30, 2026 weekly table released on February 2, 2026.',
          ]
        : []),
      '2000-2019 rows are smooth historical estimates backcast from the published 2020-2025 anchors in this atlas.',
    ],
    years: [...historicalYears, ...anchorYears],
  };
}

const cityBudgetData = cityBudgetSeedData.map(expandCityYears);

window.cityBudgetData = cityBudgetData;
