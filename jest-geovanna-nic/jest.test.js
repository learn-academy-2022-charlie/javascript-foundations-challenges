// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Write the function that will make the test pass.

describe("coffee", () => {
   it ("returns drink coffee if you are tired and  keep working if you are not tired. ",() => {
     expect(coffee("yes")).toEqual("Drink coffee")
     expect(coffee("no")).toEqual("Keep working")
   })
 })

const coffee = (string) => {
 if (string === "yes") {
   return "Drink coffee"
 } else if (string === "no"){
   return "Keep working"
 }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Write the function that will make the test pass.
describe ("chill", () => {
  it ("returns relax if you are stressed and keep going if you are not stressed. ", () => {
    expect(chill("yes")).toEqual("Relax")
    expect(chill("no")).toEqual("keep going")
  })
})

 const chill = (string) => {
   if (string  === "yes"){
     return "Relax"
   } else if (string === "no"){
     return "keep going"
   }
 }


// Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.
 // describe ("budget", () => {
 //   it ("returns in budget if a price is lower than $300.", () =>{
 //     const number = 300
 //     expect(budget(number)).toEqual("in budget")
 //   })
 //
 // })
 //
 // const budget = (budget) => {
 //   if (budget < 300){
 //     return "in budget"
 //   }
 // }



// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// Write the function that will make the test pass.
 describe ("greater", () => {
   it ("returns greater number of two", () => {
     const greaterNum = 100
    const smallerNum = 45
     expect(greater(greaterNum, smallerNum)).toEqual(smallerNum)
   })
 })

  const greater = (greaterNum, smallerNum) => {
    if (smallerNum < greaterNum){
    return smallerNum
    }
}


// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// Write the function that will make the test pass.

describe ("odd", () =>{
  it ("returns odd if number is odd or even if its not" , () =>{
    const even = 22
    const oddNum = 5
    expect (odd(even)).toEqual("even")
    expect (odd(oddNum)).toEqual("odd")
  })
})

const odd = (number) =>{
  if (number  % 2=== 0){
    return "even"
  } else {
    return "odd"
  }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Write the function that will make the test pass.
 describe ("fruits", () =>{
  it ("returns yellow if the argument is banana, red if apple and purple if grape.", () =>{
  expect (fruits("apple")).toEqual("red")
  expect(fruits("banana")).toEqual("yellow")
  expect(fruits("grape")).toEqual("purple")
})
 })

  const fruits = (string) => {
    if (string === "apple"){
      return "red"
    }else if (string === "banana"){
      return "yellow"
    } else if (string === "grape"){
      return "purple"
    }
  }

// Write the test for a function called rick that returns "Morty".
// Write the function that will make the test pass.
describe ("rick", () => {
  it ("returns Morty", () =>{
    expect (rick()).toEqual("Morty")

})
})

const rick = () => {
  return "Morty"
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Write the function that will make the test pass.

 describe ("gretting", () =>{
   it ("returns greeting with that name to the screen." , () =>{
     const person = "Nic"
     expect (gretting(person)).toEqual("Hi Nic")
   })
})
 const gretting = (person) => {
   return `Hi ${person}`
 }

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Write the function that will make the test pass.
describe ("oddOrEven", () =>{
  it ("returns odd if number is odd or even if its not" , () =>{
    const even = 22
    const oddNum = 5
    expect (oddOrEven(even)).toEqual("even")
    expect (oddOrEven(oddNum)).toEqual("odd")
  })
})

const oddOrEven = (number) =>{
  if (number  % 2=== 0){
    return "even"
  } else {
    return "odd"
  }
}

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Write the function that will make the test pass.
describe ("doubler", () =>{
  it ("returns  the result of the number multiplied by 2.", () => {
    expect(doubler(2)).toEqual(4)
  })
})

 const doubler = (number) => {
   return number * 2
 }

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

describe ("multiply", () => {
  it ("returns one of the numbers multiplied by the other number", () => {
    expect(multiply(2, 6)).toEqual(12)
  })
})
const multiply = (num1, num2) =>{
  return num1*num2
}
// Write the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.
