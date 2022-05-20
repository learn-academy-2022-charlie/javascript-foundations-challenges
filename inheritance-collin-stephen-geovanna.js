// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
class Car {
    constructor(typeBrandString, amountOfWheelsNum, yearNum, modelString){
        this.brand = typeBrandString
        this.wheels = amountOfWheelsNum
        this.year = yearNum
        this.model = modelString
        this.lights = false
        this.signal = false
        this.speed = 0
    }
    wheelsAmount(){
        return this.wheels
    }
    lightSwitch(){
      if(this.lights === false){
        this.lights = true
        return "Lights on"
      }else{
        this.lights = false
        return "Lights off"
      }
    }
    signalSwitch(){
      if(this.signal === false){
        this.signal = true
        return "Signaling"
      }else{
        this.signal = false
        return "Not signaling"
      }
    }
}

let myCar = new Car("Honda", 4, 2015, "Civic Si")
console.log(myCar.lightSwitch());
console.log(myCar.lightSwitch());
console.log(myCar);

// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.

// Story: As a programmer, I can turn the lights in all my cars on and off.

// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

// console.log(myCar.wheelsAmount())
// ---> Car { brand: 'Honda', wheels: 4, year: 2015, model: 'generic car' }


// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"


// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"


// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4


// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car

class Tesla extends Car {
    constructor(typeBrandString, amountOfWheelsNum, yearNum, modelString) {
        super(typeBrandString, amountOfWheelsNum, yearNum, modelString)
        this.electric = true
    }
    accelerate(){
      this.speed += 10
      return "Speeding up!"
    }
    braking(){
      this.speed -= 7
      return "Slowing down..."
    }
}
let myTesla = new Tesla ("Tesla", 4, 2018, "X")
console.log(myTesla)
console.log(myTesla.accelerate());
console.log(myTesla.braking());
console.log(myTesla);


// Create an object called myTesla which is a instance of class Tesla
// Story: As a programmer, I can give my Tesla a model on initialization.


// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// Story: As a programmer, I can give my Tesla a year on initialization.

// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car

class Toyota extends Car {
    constructor(typeBrandString, amountOfWheelsNum, yearNum, modelString){
        super(typeBrandString, amountOfWheelsNum, yearNum, modelString)
    }
}
// create an object called myToyota which is a instance of class Toyota
let myToyota = new Toyota("Toyota", 4, 2002, "Tundra")
// Story: As a programmer, I can give my Toyota a model on initialization.

// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// Story: As a programmer, I can give my Toyota a year on initialization.

// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
console.log(myToyota);
// Story: As a programmer, I can make a Volkswagen car.

// class Volkswagen inherits from class Car
class Volkswagen extends Car {
  constructor(typeBrandString, amountOfWheelsNum, yearNum, modelString){
    super(typeBrandString, amountOfWheelsNum, yearNum, modelString)
  }
}

// create an object called myVolkswagen which is a instance of class Volkswagen
let myVolkswagen = new Volkswagen("Volkswagen", 4, 1978, "Bug")
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
