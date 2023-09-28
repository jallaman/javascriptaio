
const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
]


const retailCompanies = companies.filter( company => company.category === 'Retail');
// console.log(retailCompanies);

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const sumOfNumbers = numbers.reduce( (prev , cur) => prev+cur);
//console.log(sumOfNumbers);


// Take the people array and create an array called youngPeople that stores objects with ONLY 
// name and email properties of all the people that are 25 and under. 
// The name property should have their first and last name.
 const people = [
    { firstName: 'John',  lastName: 'Doe',   email: 'john@gmail.com',  phone: '111-111-1111',   age: 30,    },
    {firstName: 'Jane',lastName: 'Poe', email: 'jane@gmail.com',phone: '222-222-2222', age: 25,   },
    { firstName: 'Bob',  lastName: 'Foe',  email: 'bob@gmail.com', phone: '333-333-3333',  age: 45, },
    {  firstName: 'Sara', lastName: 'Soe', email: 'Sara@gmail.com', phone: '444-444-4444', age: 19,  },
    { firstName: 'Jose', lastName: 'Koe', email: 'jose@gmail.com', phone: '555-555-5555', age: 23,},
  ];

  const youngPeople = people
  .filter( person => person.age <= 25)
  .map( person => ({name: person.firstName+' '+person.lastName, email: person.email} ) );

console.log(youngPeople);

const numbers = [2, -30, 50, 20, -12, -9, 7];
const sumOfPositiveNumbers = numbers.filter( num => num >0).reduce( (prev, cur)=> prev+cur);
console.log(sumOfPositiveNumbers);
