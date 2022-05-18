// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe("awake", () => {
it ("It checks to see if you are tired or not utilizing boolean",() => {
    expect(awake("no")).toEqual( "keep working")
    expect(awake("yes")).toEqual("drink coffee")
} )
})

// Write the function that will make the test pass.

// at Object.expect (jest.test.js:5:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.158 s
// Ran all test suites.
// error Command failed with exit code 1.
//pseudocode 
//creating a function called awake that takes in a parameter "string" and decide if we are tired or not and return "drink coffee" or "keep working"

// Write the function that will make the test pass.
const awake = (string) => {
    if(string === "yes") {
        return "drink coffee"
    } else if (string === "no"){
        return "keep working"
    }

}
//Test Suites: 1 passed, 1 total
//Tests:       1 passed, 1 total
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("stressed", () => {
    it(" returns a string that says relax or keep going", () => {
        expect(stressed("yes")).toEqual("relax")
        expect(stressed("no")).toEqual("keep going")
    })
})
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total

// Write the function that will make the test pass.
//make a function called stressed  that outputs "relax" if imput is "yes" and outputs "keep going" if imput was "no".
const stressed = (string) => {
    if(string === "yes"){
        return "relax"
    } else if( string === "no") {
        return "keep going"
    }
}
//Test Suites: 1 passed, 1 total
//Tests:       2 passed, 2 total
// Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.
// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
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