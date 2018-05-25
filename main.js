const companies = [
  { name: "Company One", category: "Finance", start: "2000  ", end: "2000" },
  { name: "Company Two", category: "Tecnology", start: "1991", end: "2000" },
  { name: "Company Three", category: "Retail", start: "1989", end: "2000" },
  { name: "Company Four", category: "Auto", start: "1999", end: "2000" },
  { name: "Company Five", category: "none", start: "1999", end: "2000" },
  { name: "Company Six", category: "none", start: "1888", end: "2000" },
  { name: "Company Seven", category: "none", start: "1999", end: "2000" }
];

const ages = [15, 18, 32, 21, 16, 45, 45, 45, 45, 65, 12, 85, 79, 96, 18];

// for
/* for(let i = 0; i < companies.length; i++) {
    console.log(componies[i])
} */

// forEach

/* companies.forEach((company, index, companies) => {
    console.log(company)
}) */

// Get 21 and older
// filter

/*First*/
/*let canDrink = []
 for(let i = 0; i < ages.length; i++) {
    if(ages[i] >= 21) {
        canDrink.push(ages[i])
    }
} */
/*second*/
/* const canDrink = ages.filter(age => {
    if(age >= 21) {
        return true
    }
}) */
/*third*/
const canDrink = ages.filter(age => age >= 21);

console.log(canDrink);

// Get retail companies

/* const retailCompanies = companies.filter(function(company) {
    if(company.category === 'Retail') {
        return true
    }
}) */

const retailCompanies = companies.filter(
  company => company.category === "Retail"
);

console.log(retailCompanies);

const eightiesCompanies = companies.filter(
  company => company.start >= 1980 && company.start < 1990
);

console.log(eightiesCompanies);

const menosde10Companies = companies.filter(
  company => company.end - company.start >= 10
);

console.log(menosde10Companies);

//map

const companyNames = companies.map((company, index, companies) => {
  return company.name;
});

console.log(companyNames);

/* const testMap = companies.map(function(company, index, companies) {
  return `${company.name} [${company.start} - ${company.end}]`;
}); */

const testMap = companies.map(
  company => `${company.name} [${company.start} - ${company.end}]`
);

console.log(testMap);

const agesSquare = ages.map(age => Math.sqrt(age));
const agesTimeTwo = ages.map(age => age * 2);

console.log(agesSquare);
console.log(agesTimeTwo);

const agesMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);

console.log(agesMap);

//Sort

// sort companies by start year
/* const sortedCompanies = companies.sort(function(company1, company2) {
  if (company1.start > company2.start) {
    return 1;
  } else {
    return -1;
  }
});  */

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

// const sortAges = ages.sort();
// const sortAges = ages.sort((a, b) => a - b);
const sortAges = ages.sort((a, b) => b - a);
console.log(sortAges);

// Reducer

/* let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
} */

/* const ageSum = ages.reduce(function(total, age) {
  return total + age;
}, 0); */

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

// Get total year for all companies

const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

console.log(totalYears);
