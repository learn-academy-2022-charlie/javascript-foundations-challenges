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
describe("budget", () => {
  let number = 200
  it("checks a number to see if it is lower than $300 and returns in budget if true", () => {
    expect(budget(number)).toEqual("in budget")
  })
})

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total


// Write the function that will make the test pass.
// create a function called budget
//budget takes a number as a parameter
//it uses a boolean to check wether the number is < 300
// ----> output is "in budget" if true

const budget = (numb) => {
  if(numb< 300){
    return "in budget"
  }
}
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
describe("smallNumb", () => {
  let num1 = 300
  let num2 = 20
  it("takes in two numbers as arguments and returns the smaller of the two by comparing them", () => {
    expect(smallNumb(num2 , num1)).toEqual(num2)
  })
})
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 3 passed, 4 total

// Write the function that will make the test pass.
// create a function called smallNumb
//takes two numbers as parameters
//using a boolean it compares num1 > num2 === true/false
//if num2 is bigger use else to return num1
//returns the smaller number

const smallNumb = (num1 , num2) => {
  if(num1 > num2){
    return num2
  }else{
    return num1
  }
}

// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total

// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
describe("isOdd", () => {
  let number = 7
  let number2 = 4
  it("takes a number and returns the string odd if it is odd", () => {
    expect(isOdd(number)).toEqual("odd")
    expect(isOdd(number2)).toEqual()
  })
})
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 4 passed, 5 total

// Write the function that will make the test pass.
//make a function called isOdd
// takes a number as a parameter
//checks to see if a number is odd or not using a boolean
//if the number is odd ---> return "odd"

const isOdd = (number) => {
  if(number % 2 !== 0){
    return "odd"
  }
}
// Test Suites: 1 passed, 1 total
// Tests:       5 passed, 5 total


// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe("fruitColor", () => {
  let apple = "red"
  let banana = "yellow"
  let grape = "purple"
  it("takes a specific fruit and returns a color of that fruit", () => {
    expect(fruitColor(apple)).toEqual("red")
    expect(fruitColor(banana)).toEqual("yellow")
    expect(fruitColor(grape)).toEqual("purple")
  })
})
// Write the function that will make the test pass.
// create a function called fruitColor
//it takes a variable as a parameter
//if it is a certain fruit, it returns its color as an output
const fruitColor = (fruits) => {
  if(fruits === "red"){
    return fruits
  }else if(fruits === "yellow"){
    return fruits
  }else if(fruits === "purple"){
    return fruits
  }
}

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
