// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Write the function that will make the test pass.

describe("coffee",() => {
  it("return a string drink coffee or keep working based on if the user is tired or not", () => {
    expect(coffee("yes")).toEqual("drink coffee")
    expect(coffee("no")).toEqual("keep working")
  })
})
const coffee = (tired) => {
  if(tired === "yes") {
  return 'drink coffee'
} else {
  return 'keep working'
}
}
console.log(coffee("yes"))

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Write the function that will make the test pass.

describe("relaxStressed", () => {
  it("returns relax if the user is stressed and returns keep going if they are not stressed", () => {
    expect(relaxStressed("no")).toEqual("keep going")
    expect(relaxStressed("yes")).toEqual("relax")
  })
})
const relaxStressed = (answer) => {
  if(answer === "yes") {
    return `relax`
  } else {
    return `keep going`
  }
}
console.log(relaxStressed("yes"))

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.
describe("budget", () => {
  it("returns in budget if price is lower than 300", () => {
    expect(budget(500)).toEqual("not in budget")
    expect(budget(100)).toEqual("in budget")
    expect(budget("hello")).toEqual("error")
    })
})
const budget = (price) => {
  if(price >= 300){
    return 'not in budget'
  } else if (price < 300){
    return 'in budget'
  } else {
    return 'error'
  }
}

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// Write the function that will make the test pass.

describe("numbers", () => {
  it("takes two numbers and returns the smaller number", () => {
    expect(numbers(30, 40)).toEqual(30)
  })
})

const numbers = (num1, num2) => {
  if(num1 === num2) {
    return `They are equal`
  } else if (num1 < num2) {
    return num1
  } else {
    return num2
  }
}

// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// Write the function that will make the test pass.

describe("checkOdd", () => {
  it("takes a number and checks if it is odd", () => {
    expect(checkOdd(33)).toEqual("The number is odd.")
    expect(checkOdd(20)).toEqual("Not odd.")
    expect(checkOdd("Hamburger")).toEqual("Not a number.")
  })
})

const checkOdd = (checkNum) => {
  if (typeof checkNum !== "number") {
    return `Not a number.`
  } 
  else if (checkNum % 2 === 0) {
    return `Not odd.`
  } else {
    return `The number is odd.`
  } 
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Write the function that will make the test pass.

describe("checkColor", () => {
  it("takes a fruit and outputs the color of the fruit", () => {
    expect(checkColor("banana")).toEqual("yellow")
    expect(checkColor("apple")).toEqual("red")
    expect(checkColor("grape")).toEqual("purple")
  })
})

const checkColor = (fruit) => {
  if(fruit === "banana") {
    return `yellow`
  } else if (fruit === "apple") {
    return `red`
  } else if (fruit === "grape") {
    return `purple`
  } else {
    return `Pick "banana", "apple", or "grape" please.`
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
