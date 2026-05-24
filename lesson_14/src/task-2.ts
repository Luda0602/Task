interface DateObject {
  day: number;
  month: number;
  year: number;
}

function getYearAfterNMonths(dateObj: DateObject, monthsCount: number): number {
  const date = new Date(dateObj.year, dateObj.month - 1, dateObj.day);

  date.setMonth(date.getMonth() + monthsCount);

  return date.getFullYear();
}

const currentDate: DateObject = {
  day: 21,
  month: 5,
  year: 2026,
};

const n: number = 8;

document.write(
  `Рік через ${n} місяців: ${getYearAfterNMonths(currentDate, n)}`,
);

console.log(getYearAfterNMonths(currentDate, n));
