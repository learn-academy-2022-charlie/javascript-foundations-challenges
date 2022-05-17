// const { describe } = require("yargs")

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe("alertness", () => {
    it("returns drink coffee if tired or keep working if not tired", () => {
        expect(alertness("tired")).toEqual("drink coffee")
        expect(alertness("not tired")).toEqual("keep working")
    })
})

//  FAIL  ./jest.test.js
//   alertness
//   ✕ returns drink coffee if tired or keep working if not tired (3 ms)

// ● alertness › returns drink coffee if tired or keep working if not tired

//   ReferenceError: alertness is not defined

// Write the function that will make the test pass.

const alertness = (prompt) => {
    if(prompt === "tired") {
        return "drink coffee"
    } else if (prompt === "not tired") {
        return "keep working"
    } 
}

alertness()

// PASS  ./jest.test.js
// alertness
//   ✓ returns drink coffee if tired or keep working if not tired (8 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        1.547 s, estimated 2 s
// Ran all test suites.
// ✨  Done in 5.95s.

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.


describe("stressLevel", () => {
    it("returns relax if you are stressed and keep going if you are not stressed", () => {
        expect(stressLevel("stressed")).toEqual("relax")
        expect(stressLevel("relaxed")).toEqual("keep going")
    })
})


// FAIL  ./jest.test.js
//   ● Test suite failed to run

//     Your test suite must contain at least one test.

//       at onResult (node_modules/@jest/core/build/TestScheduler.js:172:18)
//           at Array.map (<anonymous>)

// Write the function that will make the test pass.

const stressLevel = (string) => {
    if(string === "stressed") {
        return "relax"
    } else if (string === "relaxed") {
        return "keep going"
    }
}

stressLevel()

// PASS  ./jest.test.js
// alertness
//   ✓ returns drink coffee if tired or keep working if not tired (8 ms)
// stressLevel
//   ✓ returns relax if you are stressed and keep going if you are not stressed (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        1.611 s, estimated 2 s
// Ran all test suites.
// ✨  Done in 5.58s.

// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("inBudget", () => {
    it("returns in budget if price is lower than 300", () => {
        expect(inBudget(cash)).toEqual("in budget")
    })
})

// FAIL  jest-collin-logan/jest.test.js
// alertness
//   ✓ returns drink coffee if tired or keep working if not tired (3 ms)
// stressLevel
//   ✓ returns relax if you are stressed and keep going if you are not stressed (1 ms)
// inBudget
//   ✕ returns in budget if price is lower than 300 (3 ms)

// ● inBudget › returns in budget if price is lower than 300

//   ReferenceError: inBudget is not defined

// Write the function that will make the test pass.
let cash = 99

const inBudget = (number) => {
    if(number <= 300){
        return "in budget"
    }
    
}

inBudget(cash)


// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

describe("smallNum", () => {
    it("takes in two arguments and returns the smaller number", () => {
         let num1 = 24
         let num2 = 76
        expect(smallNum(num1, num2)).toEqual(num1)
    })
})

// FAIL  jest-collin-logan/jest.test.js
// alertness
//   ✓ returns drink coffee if tired or keep working if not tired (11 ms)
// stressLevel
//   ✓ returns relax if you are stressed and keep going if you are not stressed
// inBudget
//   ✓ returns in budget if price is lower than 300 (8 ms)
// smallNum
//   ✕ takes in two arguments and returns the smaller number (16 ms)

// ● smallNum › takes in two arguments and returns the smaller number

//   ReferenceError: smallNum is not defined

const smallNum = (num1, num2) => {
    if(num1 < num2){
        return num1
    } else if (num2 < num1){
        return num2
    }
}

smallNum(24, 76)


// Write the function that will make the test pass.
// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// Write the function that will make the test pass.
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Write the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".
// Write the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Write the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Write the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Write the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Write the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.