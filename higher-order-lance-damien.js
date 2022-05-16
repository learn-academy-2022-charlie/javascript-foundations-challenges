// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
 var arr1 = [3, 9, 15, 4, 10]
const times10 = (array) => {
    let timesArray = array.map((value) => {
        return value * 10
    })
    return timesArray
}
//console.log(times10(arr1))

// // --> [30, 90, 150, 40, 100]


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]

const oddNums = (array) => {
    let newArray = array.filter(value => {
        return value%2 !== 0
    })
    return newArray
}

console.log(oddNums(arr2))
// // --> [7, 3, 5, 13]


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
 var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // --> "nicework"
 const stringOnly = (array) => {
    let newArray = array.filter(value => {
        return typeof value === "string"
    }).join("")
    return newArray
}
console.log(stringOnly(comboArr))


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]

const newFilter = (array) => {
    let newArray = array.filter(value => {
        return value !== false && value !== 0 && value !== null && value !== " "
    })
    return newArray
}

console.log(newFilter(filterArrayValues))

// STRETCH Challenges

// Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome"
// // --> "jvscrpt s wsm"
const removeVowels = (string) => {
    let voweless = string.filter(value => {
        return value !== 
    })
}
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]