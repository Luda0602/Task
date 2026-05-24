"use strict";
function getYearAfterNMonths(dateObj, monthsCount) {
    const date = new Date(dateObj.year, dateObj.month - 1, dateObj.day);
    date.setMonth(date.getMonth() + monthsCount);
    return date.getFullYear();
}
const currentDate = {
    day: 21,
    month: 5,
    year: 2026,
};
const n = 8;
document.write(`Рік через ${n} місяців: ${getYearAfterNMonths(currentDate, n)}`);
console.log(getYearAfterNMonths(currentDate, n));
