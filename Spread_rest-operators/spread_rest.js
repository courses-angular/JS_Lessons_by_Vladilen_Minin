const citiesRussia = ['Moscow', 'St.Petersburg', 'Novosibirsk', 'Kazan'];
const citiesEurope = ['Prague', 'Rome', 'Paris', 'Madrid'];

// Spread for arrays
console.log(...citiesRussia)
console.log(...citiesEurope)

const russianCities = [...citiesRussia]; //clone the array
console.log('New array of russian cities', russianCities)

const allCities = [...citiesRussia, ...citiesEurope]; //merge all the arrays into new array
console.log('All cities', allCities)

const allMergedCities = [...citiesRussia, 'Ramat Gan', ...citiesEurope];
console.log('All merged cities', allMergedCities)

// Spread for objects
const citiesRussiaWithPopulation = {
    Moscow: 20,
    SaintPetersburg: 8,
    Kazan: 5,
    Novosibirsk: 1
}
const citiesEuropeWithPopulation = {
    Paris: 15,
    Kiev: 3,
    Berlin: 15,
    Madrid: 1,
    Moscow: 26,
}
const namesWithAges = {
    Igor: 20,
    Alex: 30,
    Anna: 40
}
// console.log(...citiesRussiaWithPopulation) // is not iterable just with {}
const newCitiesWithPopulation = {...citiesRussiaWithPopulation}
const newCitiesWithPopulationAndNamesWithAges = {...citiesRussiaWithPopulation, ...namesWithAges}
console.log('New cities with population', newCitiesWithPopulation);
console.log('Merge to objects', newCitiesWithPopulationAndNamesWithAges)

const newMergedCities = {...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation} // copy key Moscow from the last object
console.log('New merged cities', newMergedCities);


// Examples
const numbers = [5, 37, 42, 17];
console.log(Math.max(5, 37, 42, 17));
console.log(Math.max(...numbers))
console.log(Math.max.apply(null, numbers)) // Old version

// Get nodes from HTML
const divs = document.querySelectorAll('div'); //Collection of DOM elements;
const nodes = [...divs] // Clone divs into a new array

console.log(divs, Array.isArray(divs))
console.log(nodes, Array.isArray(nodes))


console.log(nodes);

// Rest
function sum1(num1, num2,...rest) {
    console.log('Rest',rest) // rest the parameters of the array
    return num1 + num2
}
function sum2(...rest) {
    return rest
}
function sumAllNumbers(num1,num2,...rest) {
    return num1 + num2 + rest.reduce((acc,number)=> acc + number,0)
}
const numbersCollection = [1, 2, 3, 4, 5]
console.log('Sum:', sum1(...numbersCollection)) //Spread into 5 arguments nut function take only 2 (num1,num2)
console.log('Rest arguments:', sum2(...numbersCollection)) //Spread into 5 arguments nut function take only 2 (num1,num2)
console.log('Sum all numbers:', sumAllNumbers(...numbersCollection)) //Spread into 5 arguments nut function take only 2 (num1,num2)

// const a = numbersCollection[0]
// const b = numbersCollection[1];

const [a,b,...others] = numbersCollection //destruction of array and rest operator
console.log(a,b,others)

const person = {
    name: 'Alex',
    age: 20,
    city: 'Kiev',
    country: 'Ukraine'
}
const {name,age,...other} = person; //destruction of object and rest operator
console.log(name,age,other)


