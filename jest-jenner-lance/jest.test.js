// Challenges
// IMPORTANT: Write the test FIRST, see it fail, then write the code to make it PASS.

// IMPORTANT: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

const drinkCoffee = (string) => {
    if(string === "tired"){
        return "drink coffee"
    } else {
        return "keep working"
    }
}

// Write the function that will make the test pass.

describe("Drink Coffee Test Suite", () => {
    it("Test Function for Drink Coffee, should return drink coffe or keep working", () => {
        expect(drinkCoffee("tired")).toEqual("drink coffee")
        expect(drinkCoffee("not tired")).toEqual("keep working")
    })
})

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

const relaxOrNotRelax = (string) => {
    if(string === "stressed"){
        return "relax"
    } else {
        return "keep going"
    }
}

// Write the function that will make the test pass.

describe("Relax Test Suite", () => {
    it("Test Fuction for relaxOrNotRelax, should return relax or keep going", () => {
        expect(relaxOrNotRelax("stressed")).toEqual("relax")
        expect(relaxOrNotRelax("not stressed")).toEqual("keep going")
    })
})

// Write the test for a function that returns "in budget" if a price is lower than $300.

const budget = (number) => {
    if(number < 300){
        return "in budget"
    } else{
        return "oh no"
    }
}

// Write the function that will make the test pass.

describe("budget", () => {
    it("Test Fuction for budget, returns in budget if number is under 300, returns oh no otherwise", () => {
        expect(budget(200)).toEqual("in budget")
        expect(budget(302)).toEqual("oh no")
    })
})
// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

const smallerNum = (num1, num2) => {
    if(typeof num1 === "number" && typeof num2 === "number"){
        if(num1 > num2){
            return num2
        } else if (num1 === num2){
            return num1
        } else if (num2 > num1){
            return num1
        }
    } else if (typeof num1 !== "number" || typeof num2 !== "number"){
        return "you suck"
    }
}

// Write the function that will make the test pass.

describe("smallerNum", () => {
    it("Test Fuction for smallerNum, should return the smaller number", () => {
        expect(smallerNum(200, 100)).toEqual(100)
        expect(smallerNum(100, 200)).toEqual(100)
        expect(smallerNum("hi", "yeah")).toEqual("you suck")
    })
})

// Write the test for a function that takes in one argument(number) and returns whether the number is odd.

const isOddNumber = (number) => {
    if(number % 2 !== 0){
        return "the number is odd"
    } else{
        return "the number is even"
    }
}

// Write the function that will make the test pass.

describe("isOddNumber", () => {
    it("Test Fuction for isOddNumber, should return a string stating if the number is even or odd", () => {
        expect(isOddNumber(1)).toEqual("the number is odd")
        expect(isOddNumber(2)).toEqual("the number is even")
    })
})

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Write the function that will make the test pass.



// Write the test for a function called rick that returns "Morty".

const rick = () => {
    return "Morty"
}

// Write the function that will make the test pass.

describe("rick", () => {
    it("Test Fuction for rick, should return a string of Morty", () => {
        expect(rick()).toEqual("Morty")
    })
})

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