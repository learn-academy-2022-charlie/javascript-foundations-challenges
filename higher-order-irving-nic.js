// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

// create a function that takes in an arrays
// return a higher order function that takes in the value and multiply by ten
// consle.log the function

// var arr1 = [3, 9, 15, 4, 10]
// // --> [30, 90, 150, 40, 100]
//
// const mult10 = arr1.map(value => {
//   return value * 10
// })
// console.log(mult10)

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

//create a fgunction that takes in an array and returns a new array of odd numbers
//higher order function that filters trough the array and return only odd numbere
//console.log the array.

// var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // // --> [7, 3, 5, 13]
//
// const array2 = arr2.filter(value => {
//   return value % 2 !== 0
// })
// console.log(array2)


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // --> "nicework"

// const letters = comboArr.filter(value => {
// return typeof value === "string"
// })
// console.log(letters.join(''))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]

const letters = filterArrayValues.filter(value => {
    typeof value != 'null' || value != 'false' 
    return value
    })
    
console.log(letters)


// STRETCH Challenges
//
// Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome"
// // --> "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
