export const options = [
  {
    value: "restaurant",
    label: "Ресторан",
    formula: (c, e, m) => c * e * m * 170,
  },
  { value: "bistro", label: "Бістро", formula: (c, e, m) => c * e * m * 150 },
  {
    value: "foodcourt",
    label: "Фудкорт",
    formula: (c, e, m) => c * e * m * 120,
  },
];

// 170,150,120 - орієнтовний чистий прибуток за один чек
