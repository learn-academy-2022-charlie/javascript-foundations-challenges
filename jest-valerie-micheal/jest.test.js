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
