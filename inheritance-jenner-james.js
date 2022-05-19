// Story: As a programmer, I can make a car.
 
// Write a variable called myCar which is an instance of the class Car
// class Car {
//     constructor(){
        
//     }
// }
// creating/instantiating and creating and instance of an object.
// let myCar = new Car()

// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
// class Car {
//     constructor(modelParam){
//     this.model = modelParam   
//     }
// }
// putting generic car here as an argument, will assign the model property to generic car
// let myCar = new Car("generic car")
// console.log(myCar)

// Story: As a programmer, I can give my car a year on initialization.
// class Car {
//     constructor(modelParam, yearParam){
//         this.model = modelParam
//         this.year = yearParam
//     }
// }


// The year for the car class can be "myCar year"
// creating a variable named my car, I'm instantiating a car object and im passing in generic car and my car year as an argument.
// let myCar = new Car("generic car", "myCar year")
// console.log(myCar)


// Story: As a programmer, I can tell how many wheels myCar has.
class Car {
    constructor(modelParam , yearParam, wheelsParam){  // Parameters
        // properties
        this.model = modelParam
        this.year = yearParam
        this.wheels = wheelsParam
    }
    // Created a method that returns the wheels property
    numberOfWheels(){
        return this.wheels 
    }
}
let myCar = new Car("generic car", "myCar year", 4) // passing in a few arguments
// Calling the method wheels will return 4
console.log(myCar.model)
console.log(myCar.numberOfWheels())
// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.

// Story: As a programmer, I can turn the lights in all my cars on and off.

// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.

// Story: As a programmer, I can slow my Tesla down by 7 per braking.

// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.

// Story: As a programmer, I can slow my Toyota down by 2 per braking.

// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.

// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.

// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.

// The method can be created in the parent class and accessed by all child classes