// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10]
// // --> [30, 90, 150, 40, 100]

const multiplyByTen = (array) => {
    let newArray = array.map((value) => { // iterates through array value being each value
        return value * 10 // pushes into new array
    })
    return newArray
}
console.log(multiplyByTen(arr1))

// Example 2
// const multiplyByTen = (array) => {
//     return newArray = array.map((value) => { // iterates through array value being each value
//         return value * 10 // pushes into new array
//     })
// }

// OLD EXAMPLE: FOR LOOPS
// const multiply = (array) => {
//     let newArray = []
//     for(let i = 0; i < array.length; i++){
//         newArray.push(array[i] * 10)
//     }
// }

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]
const onlyOddNumbers = (array) => {
    let oddNumbers = array.filter(value => {
        return value % 2 !== 0
    })
    return oddNumbers
}
console.log(onlyOddNumbers(arr2))


// // --> [7, 3, 5, 13]
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// console.log(typeof "h")
const onlyLetter = (array) => {
    let letters = array.filter(value => {
        return typeof value === "string"
    })
    console.log("BEFORE: ", letters)
    let stringified = letters.join("")
    return stringified
}
console.log("AFTER: ", onlyLetter(comboArr))
// // --> "nicework"

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]

const someArray = (array) => {
    let newArray = array.filter(value => {
        return value !== false && value !== null && value !== 0 && value !== " "
    })
    return newArray
}
console.log(someArray(filterArrayValues))

// // --> [58, "abcd", true]
// STRETCH Challenges

// Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome"
// // --> "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4] 
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
