interface Sponsor {
  lastName: string;
  firstName: string;
  investmentAmount: number;
}

interface Site {
  title: string;
  owner: string;
  sponsors: Sponsor[];
  releaseYear: number;
  developmentCost: number;
}

const company: Site[] = [
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
const totalCostOfSites: number = company.reduce((acc: number, elem: Site) => {
  return acc + elem.developmentCost;
}, 0);

document.write(`Загальна вартість усіх сайтів: ${totalCostOfSites}<br>`);

// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
const sitesCount: Site[] = company.filter(
  (elem: Site) => elem.releaseYear >= 2000 && elem.releaseYear <= 2009,
);

document.write(
  `Кількість сайтів, що було зроблено між 2000 та 2009 рр: ${sitesCount.length}<br>`,
);

// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
const sumSponsorsMoreFor100000: number = company.filter((site: Site) => {
  const sponsorsSum: number = site.sponsors.reduce(
    (sum: number, sponsor: Sponsor) => sum + sponsor.investmentAmount,
    0,
  );

  return sponsorsSum > 100000;
}).length;

document.write(
  `Кількість сайтів, де сума спонсорських вкладень була більшою за 100000: ${sumSponsorsMoreFor100000}<br>`,
);

// 4) створити загальний список усіх спонсорів
const sponsorsList: Sponsor[] = company.reduce(
  (allSponsors: Sponsor[], site: Site) => allSponsors.concat(site.sponsors),
  [],
);

document.write(
  `Загальний список усіх спонсорів: ${JSON.stringify(sponsorsList)}<br>`,
);

const getSponsorsSum = (site: Site): number =>
  site.sponsors.reduce(
    (sum: number, sponsor: Sponsor) => sum + sponsor.investmentAmount,
    0,
  );

const getProfit = (site: Site): number =>
  getSponsorsSum(site) - site.developmentCost;

// 5) знайти рік, коли прибуток був найбільшим
const siteWithMaxProfit: Site = company.reduce((maxSite: Site, site: Site) =>
  getProfit(site) > getProfit(maxSite) ? site : maxSite,
);

document.write(
  `Рік, коли прибуток був найбільшим: ${siteWithMaxProfit.releaseYear}<br>`,
);

// 6) упорядкувати список за спаданням прибутку
const sortedByProfit: Site[] = [...company].sort(
  (site1: Site, site2: Site) => getProfit(site2) - getProfit(site1),
);

document.write(
  `Упорядкований список за спаданням прибутку: ${JSON.stringify(sortedByProfit)}<br>`,
);

// 7) створити 2 окремих списки з копіями об’єктів
const copySite = (site: Site): Site => ({
  ...site,
  sponsors: site.sponsors.map((sponsor: Sponsor) => ({ ...sponsor })),
});

const sitesCostLessThan10000: Site[] = company
  .filter((site: Site) => site.developmentCost <= 10000)
  .map(copySite);

const sitesCostMoreThan10000: Site[] = company
  .filter((site: Site) => site.developmentCost > 10000)
  .map(copySite);

document.write(
  `Сайти з вартістю до 10000: ${JSON.stringify(sitesCostLessThan10000)}<br>`,
);

document.write(
  `Сайти з вартістю більше 10000: ${JSON.stringify(sitesCostMoreThan10000)}<br>`,
);
