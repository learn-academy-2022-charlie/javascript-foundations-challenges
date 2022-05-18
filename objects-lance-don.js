// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent"
}
// Write the code that accesses the first name of the person object.
console.log(person.firstName)
// Write the code that accesses the last name of the person object.
console.log(person.lastName)
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
person.homePlanet = "Earth"
//console.log(person)

// Update the person object with a method that logs "Arthur Dent is from planet Earth".
person.fullSent = function () {
    return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
}
console.log(person.fullSent())
// Consider this variable:

const product = {
  name: "chair",
  price: 24.99
}


// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
const describeProduct = (object) => {
    return `The product is a ${object.name}. It costs $${object.price}`
}
console.log(describeProduct(product))


// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
const totalWithTax = (object) => {
    let beforeRound = 0
    beforeRound = object.price * 1.07 * 100 
    return Math.round(beforeRound)/100
  
}
console.log(totalWithTax(product))

// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}
// Write the code that accesses the ingredients property.
lunch.ingredients

// Write the code that access the third ingredient of the lunch object.
console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const sandIng = (object) => {
    return `The ingredients for a ${object.name} ${object.type} are ${object.ingredients[0]}, ${object.ingredients[1]}, ${object.ingredients[2]}.`
    
}
console.log(sandIng(lunch))

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
lunch.sandwich = function () {
    return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, ${this.ingredients[2]}.`
}
console.log(lunch.sandwich())
// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.

const onlyCats = (array) => {
  return animals.filter(value => value.type === "cat")
}

console.log(onlyCats(animals))
// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.

const onlyNames = (array) => {
  return animals.map(value => value.name)
}

console.log(onlyNames(animals))
// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.

const namesAgeTen = (array) => {
  let ageTen = animals.filter(value => value.age >10) 
    return ageTen.map(value => value.name)
  
}
console.log(namesAgeTen(animals))
// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
const describeAnimals = (array) => {
    return array.map(value => `${value.name} is a ${value.age} old ${value.type}`)
}
console.log(describeAnimals(animals))

// Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}

// Write the code that destructures the author object so that the following code snippet will run successfully:

const {name, genre} = author

console.log(`${name} is a ${genre} author`)
// Output: "H. G. Wells is a science fiction author"
// Consider this variable:

const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire"
}

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water"
}

// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
const describePokemon = (object) => {
  let {species, pokemon_type} = object
  return `${species} is a ${pokemon_type} pokemon`
}

console.log(describePokemon(pokeOne))
// Output: "Charmandar is a Fire pokemon"
console.log(describePokemon(pokeTwo))
// Output: "Magikarp is a Water pokemon"

// Consider this variable:

const triangleDimensions = {
  base: 2,
  height: 5
}

// Modify the triangleDimensions object to have a method that returns the area of the triangle.
triangleDimensions.area = function () {
  return this.base * this.height * 0.5
}
console.log(triangleDimensions.area())
// Write the code that will update the base to be the value of 6.
triangleDimensions.base = 6
console.log(triangleDimensions)


// Consider this variable:

const learn = {
  cohorts: {
    "2021": ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
    "2022": ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
  }
}
// Write the code that logs the name of your cohort.
// console.log(`${learn["cohorts"]["2022"]} ${learn["cohorts"]["2022"][2]}`)
console.log(`${Object.keys(learn.cohorts)[1]} ${learn.cohorts["2022"][2]}`)
// Write the code that uses destructuring to log the name of your cohort.


const { 
        cohorts: {
          ["2021"]: array1, 
          ["2022"]: array2
        }
      } = learn

// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.

// const yearCohort = (object, yearStr, cohortStr) => {
//   //TODO find some object methods to extract keys, use array to find length to see how we need to destructure the object
  
//   let nestOne = Object.keys(object)[Object.keys(object).length - 1]
//   console.log(nestOne)
//   let nestTwo = Object.keys(object[nestOne])
//   console.log(nestTwo)
//   return `${nestTwo[nestTwo.indexOf(yearStr)]} ${object[nestOne][yearStr].indexOf(cohortStr)}`
// }

// console.log(yearCohort(learn, "2022", "Charlie"))
// // Output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "

