const cityBudgetData = [
  {
    slug: 'new-york',
    city: 'New York City',
    state: 'New York',
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
      { label: '2020', total: 92.8, shares: [25, 17, 15, 14, 29] },
      { label: '2021', total: 88.2, shares: [24, 18, 15, 14, 29] },
      { label: '2022', total: 98.7, shares: [26, 17, 15, 13, 29] },
      { label: '2023', total: 101.1, shares: [26, 18, 15, 13, 28] },
      { label: '2024', total: 107.1, shares: [27, 17, 15, 13, 28] },
      { label: '2025', total: 112.4, shares: [27, 17, 15, 12, 29] },
    ],
  },
  {
    slug: 'los-angeles',
    city: 'Los Angeles',
    state: 'California',
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
      { label: '2020', total: 10.71, shares: [31, 20, 11, 14, 24] },
      { label: '2021', total: 10.53, shares: [32, 19, 11, 14, 24] },
      { label: '2022', total: 11.48, shares: [32, 19, 12, 13, 24] },
      { label: '2023', total: 11.78, shares: [31, 20, 13, 13, 23] },
      { label: '2024', total: 13.15, shares: [30, 21, 14, 13, 22] },
      { label: '2025', total: 12.9, shares: [30, 21, 15, 12, 22] },
    ],
  },
  {
    slug: 'houston',
    city: 'Houston',
    state: 'Texas',
    shortLabel: 'Houston',
    pageTitle: 'Houston Budget',
    summary:
      'Houston’s all-funds budget leans heavily toward public safety and enterprise-style city operations such as airports, utilities, drainage, and mobility.',
    fiscalNote:
      'Houston’s official documents vary by year between adopted, current, and proposed all-funds totals. The timeline keeps those headline figures directional rather than exact.',
    budgetBasis:
      'Totals are official all-funds figures in billions of dollars drawn from adopted or proposed budget books. Category shares are rough normalized groupings built for readability.',
    colors: ['#7c2d12', '#ad5c2e', '#d3a15e', '#3d7b73', '#223248'],
    categories: [
      'Public safety',
      'Utilities & enterprise operations',
      'Streets, drainage & mobility',
      'Health, housing & neighborhood services',
      'Administration, debt & reserves',
    ],
    sourceTrail: [
      'City of Houston adopted budget books and FY2025 budget proposal materials',
      '2020-2024 include official current or adopted all-funds totals where those are the clearest published figures',
      'Percentages are rounded to whole numbers after hand-grouping large department clusters',
    ],
    years: [
      { label: '2020', total: 5.49, shares: [33, 28, 14, 10, 15] },
      { label: '2021', total: 5.56, shares: [33, 27, 15, 10, 15] },
      { label: '2022', total: 5.75, shares: [34, 27, 14, 10, 15] },
      { label: '2023', total: 6.24, shares: [34, 26, 15, 10, 15] },
      { label: '2024', total: 6.29, shares: [33, 27, 15, 10, 15] },
      { label: '2025', total: 6.73, shares: [32, 28, 15, 10, 15] },
    ],
  },
];

window.cityBudgetData = cityBudgetData;
