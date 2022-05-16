// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10]

// Declare function multiplier
const multiplier = (array) => {
    //Using .map want to create a same sized array and multiply each element by 10
    return array.map(value => value * 10)
}
console.log(multiplier(arr1))
// // --> [30, 90, 150, 40, 100]

// THIS METHOD CHANGES ORIGINAL ARRAY
// arr1.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }

// console.log(arr1)

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]

// Declare function onlyOdd
const onlyOdd = (array) => {
    // Use .filter to check for values that are odd using modulo. If something % 2 does not equal 0, it is odd
   return array.filter(value => value % 2 !== 0)
}
console.log(onlyOdd(arr2))
// console.log(arr2) (ORIGINAL ARRAY UNTOUCHED)
// // --> [7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

// Declare function onlyLetters
const onlyLetters = (array) => {
    //Use .filter and check to make sure the data type is a string and give an array with only strings
    let stringArray = array.filter(value => typeof value === "string")
    //Since output is an array, use .join to convert back into a string
    return stringArray.join("") 
}

console.log(onlyLetters(comboArr))
// // --> "nicework"

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]

// Declare function pickyArray
const pickyArray = (array) => {
    // Conditions check and exclude datatypes, null, false, " ", 0
   return filterArrayValues.filter(value => value !== null && value !== false && value !== 0 && value !== " ")
}

console.log(pickyArray(filterArrayValues))
// // --> [58, "abcd", true]


// STRETCH Challenges

// Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javAscript is awEsome"

//Declare function noVowels
const noVowels = (string) => {
    //Use argument which is a string, use .split to create an array.
   let strArray = string.split("")
   //console.log(strArray) - used to check if strArray is correct
   // Declare noVowelArray and use .filter on strArray and check for vowels. use .toLowerCase() to make sure even capital vowels get removed.
   let noVowelArray = strArray.filter(value => value.toLowerCase() !== "a" && value.toLowerCase() !== "e" && value.toLowerCase() !== "i" && value.toLowerCase() !== "o" && value.toLowerCase() !== "u")
   //Change array back into string using .join
   return noVowelArray.join("")
}
console.log(noVowels(str))

// // --> "jvscrpt s wsm"

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3]
var arr2 = [7, 8, 2, 1, 5, 4]

// const noDupes = (array1, array2) => {
//     let comboArr = array1.concat(array2)
//     return Array.from(new Set(comboArr))
// }

// console.log(noDupes(arr1, arr2))

// // --> [3, 7, 10, 5, 4, 8, 2, 1]

//Declare function noDupes with two parameters
const noDupes = (array1, array2) => {
   //Create a concatenated array, comboArray
    let comboArr = array1.concat(array2)
   //console.log(comboArr) - used to check concatenated array
   //since indexOf checks first occurence, if it runs into a duplicate, the index will not match and will not be included int he new array
   let noDupeArray = comboArr.filter((item, index) => index === comboArr.indexOf(item))
   return noDupeArray
}
console.log(noDupes(arr1, arr2))