// > **IMPORTANT**: Write the test FIRST, see it fail, then write the code to make it PASS.

// > **IMPORTANT**: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.


// 1. Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.  
//   - Write the function that will make the test pass. 
describe ("tired", () => {
    it("returns drink coffee or keep working depending if someone is tired",() => {
        expect(tired("tired")).toEqual("drink coffee")
        expect(tired("not tired")).toEqual("keep working")
    })
})
//create a function called tired it takes in string as argument and returns
//a string of "drink coffee " if input is tired or outputs "keep working" if input is not tired.
const tired = (string) => {
    if(string === "tired") {
        return "drink coffee"
    }
    else {
        return "keep working"
    }

}

// 2. Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
//   - Write the function that will make the test pass.
describe ("relax", () => {
    it("returns relax if the input is stressed or returns keep going if the input is not stressed", () => {
        expect (relax("stressed")).toEqual("relax")
        expect (relax("not stressed")).toEqual("keep going")
        
    } )
})
// create a function called relax that takes string input and returns relax if the input is stressed or returns keep going if not stressed.

const relax = (string) => {
    if(string === "stressed") {
        return "relax"
        
    }else {
        return "keep going"
    }
}



// 3. Write the test for a function that returns "in budget" if a price is lower than $300.  
//   - Write the function that will make the test pass.

describe("inBudget", () => {
    it("returns 'in budget' if price is lower than $300", () => {
        expect(inBudget(299.99)).toEqual("in budget")
    })
})

// Pseudocode
// create function called inBudget
// parameters = a number
// logic
//      - compare if number is less than 300
//          if is less return 'in budget'

const inBudget = (number) => {
    if(number < 300) {
        return "in budget"
    }
}

// 4. Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
//   - Write the function that will make the test pass.

// write a function named smallerNumber
// takes in two numbers
// compares the numbers
//      if number1 was less than number2 returns number1
//      if number1 was greater than number2 returns number2
//      if number1 is equal to number2 return 'equal'
//      returns smaller number

describe("smallerNumber", () => {
    it("returns smaller number of two numbers", () => {
        expect(smallerNumber(10, 20)).toEqual(10)
        expect(smallerNumber(100, 1000)).toEqual(100)
        expect(smallerNumber(-1, -500)).toEqual(-500)
        expect(smallerNumber(5, 5)).toEqual("5 === 5")
    })
})

const smallerNumber = (num1, num2) => {
    if(num1 < num2) {
        return num1
    } else if(num2 < num1) {
        return num2
    } else {
        return `${num1} === ${num2}`
    }
}

// 5. Write the test for a function that takes in one argument(number) and returns whether the number is odd.
//   - Write the function that will make the test pass.

// psuedo  write a function named oddNum    
// takes in a parameter that is a number
// if the number is odd returns odd
// if the number is even returns even
 
describe("oddNum", ()  => {
    it("returns if a number is odd", () => {
       
        expect(oddNum(3)).toEqual("odd")
        expect(oddNum(4)).toEqual("even")
        expect(oddNum(0)).toEqual("zero")
    })
})

const oddNum = (number) => {
    if(number % 2 === 1 || number % 2 === -1) {
        return "odd"
    }else if(number === 0){
        return "zero"
    } else {
        return "even"
    }
}


// 6. Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
//   - Write the function that will make the test pass.
// pseudo code function = pineapple takes in color string and returns banana if color yellow, return apple if color is red, and returns grape if color is purple.

describe("pineappple", () => {
    it("returns different fruit name depending on color", () => {
        expect(pineapple("banana")).toEqual("yellow")
        expect(pineapple("apple")).toEqual("red")
        expect(pineapple("grape")).toEqual("purple")
    })
})

// 7. Write the test for a function called `rick` that returns "Morty".
//   - Write the function that will make the test pass.

// 8. Write the test for a function called `greeter` that takes a name as an argument and returns a greeting with that name to the screen.
//   - Write the function that will make the test pass.

// 9. Write the test for a function called `oddOrEven` that takes a number as an argument and logs whether the number is odd or even.
//   - Write the function that will make the test pass.

// 10. Write the test for a function called `doubler` that takes a number and returns the result of the number multiplied by 2.
//   - Write the function that will make the test pass.

// 11. Write the test for a function called `multiply` that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
//   - Write the function that will make the test pass.

// 12. Write the test for a function called `divisibleBy` that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
//   - Write the function that will make the test pass.

// 13. Write the test for a function called `fizzbuzz`. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
//   - Write the function that will make the test pass.





