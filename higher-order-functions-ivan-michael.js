// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

// create a function called timesTen that will look at each number in "arr1" and will return all the values in the array times 10.

var arr1 = [3, 9, 15, 4, 10]

const timesTen = arr1.map((value)=>{
	// here we added a .map to the array arr1 and told it to look for values with the (value) parameter.
	return value * 10 
})			//call a return function to output the value of arr1 multiplied by 10.
	console.log(timesTen)
//  now you console.log to see if it worked

// // --> [30, 90, 150, 40, 100]


// Write a function that takes in an array of numbers and returns a new array with only odd numbers. 
var arr2 = [2, 7, 3, 5, 8, 10, 13]

// I will create a function that will take an array, look at each value, and .filter() each one, returning only the odd numbers.

const oddsOnly = arr2.filter((value) => {
	// create a constant that equal to the number array filtered where each iteration looks at the element's value
	if (value % 2 !== 0) {
		// if the value divided by 2 does not have a remainder of 0, it is odd
		return value
		// if it meets the above parameters, return it
	}
})

console.log(oddsOnly)

// // Expected Output: --> [7, 3, 5, 13]
// // Output: [7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

// I will create a function that will take an array with any data inside it. It will then .filter() through each one and return the element if the typeof === "string" is true.

const lettersOnly = comboArr.filter((value) => {
	// the constant lettersOnly = an array with a filter that looks at element values
	if (typeof value === "string") {
		// if the value type is a string...
		return value
		//... return the value
	}
})
console.log(lettersOnly.join(""))

// the normal return is an array of individual characters, .join("") brings them together into one string

// // Expected Output: --> "nicework"
// Output: "nice work"

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]

//  I will create a funciton that takes an array that has a filter. The filter will look at the value of each element. I will use a conditional statement to select values that are NOT false, null, 0, or blank.

// // --> [58, "abcd", true]






// STRETCH Challenges

// Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome"
// // --> "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]