//Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
//назва компанії на час розробки (назву періодично змінюють)
//власник компанії
//споснсори (масив спонсорів)
// * прізвище спонсора
//* ім’я  спонсора
//* сума вкладень спонсора
//рік випуску
//вартість сайту

"use strict";
const company = [
  {
    title: "Rozetka",
    owner: "Vladyslav",
    sponsors: [
      {
        lastName: "Ivanov",
        firstName: "Petro",
        investmentAmount: 50000,
      },
      {
        lastName: "German",
        firstName: "John",
        investmentAmount: 50000,
      },
      {
        lastName: "Smit",
        firstName: "Adam",
        investmentAmount: 15000,
      },
      {
        lastName: "Savchuk",
        firstName: "Vitaliy",
        investmentAmount: 10000,
      },
    ],
    releaseYear: 2000,
    developmentCost: 1300000,
  },
  {
    title: "OLX",
    owner: "EVO",
    sponsors: [
      {
        lastName: "Kovalenko",
        firstName: "Olena",
        investmentAmount: 30000,
      },
      {
        lastName: "Smart",
        firstName: "Julia",
        investmentAmount: 20000,
      },
    ],
    releaseYear: 2005,
    developmentCost: 9000,
  },
  {
    title: "Prom",
    owner: "Prosus",
    sponsors: [
      {
        lastName: "Tusa",
        firstName: "Anna",
        investmentAmount: 10000,
      },
      {
        lastName: "Bokalo",
        firstName: "Matthew",
        investmentAmount: 30000,
      },
      {
        lastName: "Onysko",
        firstName: "Bozhena",
        investmentAmount: 25000,
      },
    ],
    releaseYear: 2018,
    developmentCost: 1500000,
  },
  {
    title: "Amazon",
    owner: "Jeffrey",
    sponsors: [
      {
        lastName: "Jackson",
        firstName: "Alan",
        investmentAmount: 40000,
      },
      {
        lastName: "Klark",
        firstName: "Matthew",
        investmentAmount: 30000,
      },
      {
        lastName: "Dymko",
        firstName: "Alex",
        investmentAmount: 25000,
      },
    ],
    releaseYear: 2004,
    developmentCost: 2000000,
  },
];

// 1) загальна вартість усіх сайтів

const totalCostOfSites = company.reduce((acc, elem) => {
  return acc + elem.developmentCost;
}, 0);

document.write(`Загальна вартість усіх сайтів:${totalCostOfSites}<br>`);
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.

const sitesCount = company.filter(
  (elem) => elem.releaseYear >= 2000 && elem.releaseYear <= 2009,
);
document.write(
  `ількість сайтів, що було зроблено між 2000 та 2009 рр :${sitesCount.length}<br>`,
);

//3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
const sumSponsorsMoreFor100000 = company.filter((el) => {
  const sponsorsSum = el.sponsors.reduce(
    (sum, sponsor) => sum + sponsor.investmentAmount,
    0,
  );
  return sponsorsSum > 100000;
}).length;
document.write(
  `Kількість сайтів, де сума спонсорських вкладень була більшою за 100000:${sumSponsorsMoreFor100000}<br>`,
);

//4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)

const sponsorsList = company.map((element) => element.sponsors).flat();
document.write(
  `загальний список усіх спонсорів : ${JSON.stringify(sponsorsList)}<br>`,
);

const getSponsorsSum = (site) =>
  site.sponsors.reduce((sum, sponsor) => sum + sponsor.investmentAmount, 0);

const getProfit = (site) => getSponsorsSum(site) - site.developmentCost;

// 5) знайти рік, коли прибуток був найбільшим
const siteWithMaxProfit = company.reduce((maxSite, site) =>
  getProfit(site) > getProfit(maxSite) ? site : maxSite,
);

document.write(
  `Pік, коли прибуток був найбільшим :${siteWithMaxProfit.releaseYear}<br>`,
);

// 6) упорядкувати список за спаданням прибутку
const sortedByProfit = [...company].sort(
  (site1, site2) => getProfit(site2) - getProfit(site1),
);
document.write(
  `упорядкувати список за спаданням прибутку:${JSON.stringify(sortedByProfit)}<br>`,
);

// 7) створити 2 окремих списки з копіями об’єктів
const copySite = (site) => ({
  ...site,
  sponsors: site.sponsors.map((sponsor) => ({ ...sponsor })),
});

const sitesCostLessThan10000 = company
  .filter((site) => site.developmentCost <= 10000)
  .map(copySite);

const sitesCostMoreThan10000 = company
  .filter((site) => site.developmentCost > 10000)
  .map(copySite);
document.write(
  `Сайти з вартістю до 10000: ${JSON.stringify(sitesCostLessThan10000)}<br>`,
);
document.write(
  `Сайти з вартістю більше 10000: ${JSON.stringify(sitesCostMoreThan10000)}<br>`,
);
