// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.


describe ("coffee", () => {
    it("drink coffee if you're tired, keep working if you're not", () => {
    expect(coffee ("tired")).toEqual ("drink coffee")
    expect(coffee ("not tired")).toEqual ("keep working")
    } )

}) 

// Write the function that will make the test pass.

const coffee = (string) => {
    // If you are tired return "drink coffee"
        if(string === "tired"){
            return "drink coffee"
        } else {
            return "keep working"
        }
    }
    
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe ("stress", () => {
    it("relax if stressed, keep going if not stressed", () => {
    expect(stress ("stressed")).toEqual ("relax")
    expect(stress ("not stressed")).toEqual ("keep going")
    } )

}) 
// Write the function that will make the test pass.

const stress = (string) => {
    // If you stressed "relax"
        if(string === "stressed"){
            return "relax"
        } else {
            return "keep going"
        }
    }
// Write the test for a function that returns "in budget" if a price is lower than $300.

describe ("money", () => {
    it("returns in budget if the price is lower than $300",() => {
        expect(money(299)).toEqual("in budget")
    })
})

// Write the function that will make the test pass.

const money = (number) => {
    if (number < 300) {
        return "in budget"
    }
}
// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

describe("smallerNum", () => {
    it("takes two numbers and returns smaller number", () => {
        expect(smallerNum(10, 23)).toEqual(10)
    })
})
// Write the function that will make the test pass.

const smallerNum = (num1, num2) => {
    if(num1 < num2) {
        return num1
    } else {
        return num2
    }
}


// Write the test for a function that takes in one argument(number) and returns whether the number is odd.

describe("isOdd", () => {
    it("return odd if the number is odd", () => {
        expect(isOdd(9)).toEqual("odd")
    })
})

// Write the function that will make the test pass.

const isOdd = (num) => {
    if(num % 2 !== 0) {
        return "odd"
    }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe("fruitColor", () => {
    it("return yellow if banna, red if apple, purple if grape", () => {
        expect(fruitColor("baNana")).toEqual("yellow")
        expect(fruitColor("AppLe")).toEqual("red")
        expect(fruitColor("GrapE")).toEqual("purple")
    })
})

// Write the function that will make the test pass.

const fruitColor = (fruit) => {
    if (fruit.toLowerCase() === "banana"){
        return "yellow"
    } else if (fruit.toLowerCase() === "apple") {
        return "red"
    } else if (fruit.toLowerCase() === "grape") {
        return "purple"
    }
}

// Write the test for a function called rick that returns "Morty".

describe("rick", () => {
    it("function returns Morty", () => {
        expect(rick()).toEqual("Morty")
    })
})

// Write the function that will make the test pass.

const rick = () => {
    return "Morty"
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

describe("greeter", () => {
    it("returns a greeting with given name", () => {
        expect(greeter("Morbius")).toEqual("How have you been Morbius")
    })
})
// Write the function that will make the test pass.

const greeter = (string) => {
    return `How have you been ${string}`
}
// Write the test for a function called oddOrEven that 
// takes a number as an argument and logs whether the number is odd or even.

describe ("oddOrEven", () => {
    it("takes a number as ans ")
})
// Write the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Write the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Write the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.