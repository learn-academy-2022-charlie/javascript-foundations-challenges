// Challenges
// Story: As a programmer, I can make a car.

class Car {
    constructor(model, year) {
        this.model = model
        this.year = year
        this.wheel = 4
        this.lights = "off"
        this.turnSignal = "off"
        this.speed = 0
    }
    wheels() {
        this.wheel = 4
    }
    lightSwitch(){
        if (this.lights === "off"){
            this.lights = "on"
            return "Lights are on"
        } else {
            this.lights = "off"
            return "Lights are off"
        }

    }
    signalSwitch(){
        if (this.turnSignal === "off"){
            this.turnSignal = "on"
            return "Signal on"
        } else {
            this.turnSignal = "off"
            return "Signal off"
        }

    }
    accelerate(){
            this.speed = this.speed 
            return this.speed +" mph"
    }
    braking (){
            this.speed = this.speed
            return this.speed +" mph"
    }
}

// Write a variable called myCar which is an instance of the class Car

var myCar = new Car("Generic Car", 2022)
console.log(myCar)

// Story: As a programmer, I can give my car a model on initialization.
// ok

// The model for the car class can be "generic car"
//Set to Ford because generic car is boring

// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"


// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4

myCar.wheels()
console.log(myCar)


// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
class Tesla extends Car{
  constructor(model, year){
    super(model, year)
  }
}

// Create an object called myTesla which is a instance of class Tesla
var myTesla = new Tesla("Tesla", 2022)
console.log(myTesla)

// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
class Toyota extends Car {
  constructor(model, year){
    super(model, year)
  }
}
var myToyota = new Toyota("Toyota", 2017)
console.log(myToyota)
// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car

class Volkswagen extends Car {
    constructor(model, year) {
        super(model, year)
    }
}

// create an object called myVolkswagen which is a instance of class Volkswagen
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

var myVolkswagen = new Volkswagen("Volkswagen", 2013)
console.log(myVolkswagen)
console.log(myVolkswagen.lightSwitch())
console.log(myVolkswagen)

// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.
//Go back up to car and add light property and method

// Story: As a programmer, I can turn the lights in all my cars on and off.

// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

console.log(myCar)
console.log(myCar.signalSwitch())
console.log(myCar)

console.log(myTesla.signalSwitch())
console.log(myTesla)

// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

console.log(Tesla)
console.log(Tesla.accelerate())
console.log(Tesla)

// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.

// Story: As a programmer, I can slow my Tesla down by 7 per braking.

// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.

// Story: As a programmer, I can slow my Toyota down by 2 per braking.

// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.

// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.

// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.

// The method can be created in the parent class and accessed by all child classes
