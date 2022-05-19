// Story: As a programmer, I can make a car.
class Car {
    constructor (year, model, steeringWheel, doors, seats, wheels) {
        this.year = year
        this.model = model
        this.steeringWheel = steeringWheel
        this.doors = doors
        this.seats = seats
        this.wheels = wheels
    }
}
// Write a variable called myCar which is an instance of the class Car

var myCar = new Car (true, 4, 5, 4)

// Story: As a programmer, I can give my car a model on initialization.

// The model for the car class can be "generic car"

var myCar = new Car ("generic car", true, 4, 5, 4)

// Story: As a programmer, I can give my car a year on initialization.

var myCar = new Car ("myCar year", "generic car", true, 4, 5, 4)

// The year for the car class can be "myCar year"

// Story: As a programmer, I can tell how many wheels myCar has.

// Calling the method wheels will return 4


// Story: As a programmer, I can make a Tesla car.

var myCar = new Car ("myCar year", "Tesla", true, 4, 5, 4)

// class Tesla inherits from class Car

class Tesla extends Car {
        constructor () {
        super ()
    }
}

// Create an object called myTesla which is a instance of class Tesla

var myTesla = new Tesla()
// var myTesla = new Tesla("myTesla year", "Model Y", true, 4, 5, 4)

console.log(myTesla)
        //NOTE: Sean (but not Michael) is having trouble with Tesla and inheritors. Next time someone looks at this, please help Sean.
        // Michael knows exactly what to do, but this is a learning experience for Sean.

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