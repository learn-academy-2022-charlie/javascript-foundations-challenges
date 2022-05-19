
// ## Challenges

// 1. **Story**: As a programmer, I can make a car.
// - Write a variable called myCar which is an instance of the class Car
class Car {
    constructor(model= 'generic car', year = 'myCar year', tires = 4){
        this.model = model
        this.year = year
        this.tires = tires
        this.headlightOn = false
        this.turnSignal = false
        this.speed = 0
    }
    wheels(){
        return this.tires
    }
    lights() {
        if(this.headlightOn === false) {
            this.headlightOn = true
            return "Turn headlights on!"
        } else {
            return "Headlights are already off!"
        }
    }
    signal() {
        if(this.turnSignal === false) {
            this.turnSignal = true
            return "They're On."
        } else {
            return "Signals Off"
        }
    }
    carInfo() {
        return `I drive a ${this.year} ${this.model} car!`
    }
}

var myCar = new Car()
// console.log(myCar.wheels())
// 2. **Story**: As a programmer, I can give my car a model on initialization.
// - The model for the car class can be "generic car"


// 3. **Story**: As a programmer, I can give my car a year on initialization.
// - The year for the car class can be "myCar year"

// 4. **Story**:	As a programmer, I can tell how many wheels myCar has.
// - Calling the method wheels will return 4

// 4. **Story**:	As a programmer, I can make a Tesla car.
// - class Tesla inherits from class Car
// - Create an object called myTesla which is a instance of class Tesla
class Tesla extends Car{
    constructor(model = 'Tesla', year = 'myTesla year', tires){
        super(model, year, tires)
    }
    accelerate() {
        this.speed += 10
        return 'Accelerating'
    }
    brake() {
        this.speed -= 7
        return 'Braking'
    }
}
var myTesla = new Tesla()
myTesla.year = 2020
// console.log(myTesla)
// 5. **Story**: As a programmer, I can give my Tesla a model on initialization.
// - The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// 6. **Story**: As a programmer, I can give my Tesla a year on initialization.
// - The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// 7. **Story**:	As a programmer, I can make a Toyota car.
// - class Toyota inherits from class Car
// - create an object called myToyota which is a instance of class Toyota
class Toyota extends Car{
    constructor(model = 'Toyota', year = 'myToyota year', tires){
        super(model, year, tires)
    }
    accelerate() {
        this.speed += 5
        return 'Accelerating'
    }
    brake() {
        this.speed -= 2
        return 'Braking'
    }
}
var myToyota = new Toyota()
// console.log(myToyota)


// 8. **Story**: As a programmer, I can give my Toyota a model on initialization.
// - The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// 9. **Story**: As a programmer, I can give my Toyota a year on initialization.
// - The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// 10. **Story**:	As a programmer, I can make a Volkswagen car.
// - class Volkswagen inherits from class Car
// - create an object called myVolkswagen which is a instance of class Volkswagen
class Volkswagen extends Car{
    constructor(model = 'Volkswagen', year = 'myVolkswagen year', tires){
        super(model, year, tires)
    }
    accelerate() {
        this.speed += 7
        return 'Accelerating'
    }
    brake() {
        this.speed -= 5
        return 'Braking'
    }
}
var myVolkswagen = new Volkswagen()
// console.log(myVolkswagen)



// 11. **Story**: As a programmer, I can give my Volkswagen a model on initialization.
// - The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// 12. **Story**: As a programmer, I can give my Volkswagen a year on initialization.
// - The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// 13. **Story**: As a programmer, I can give all my cars a lights property. Lights start in the off position.
// console.log(myCar)
// console.log(myCar.lights()) // => "Headlights are already off!"

// console.log(myCar.lights()) // => "Headlights are on!"
// console.log(myCar)
// 14. **Story**: As a programmer, I can turn the lights in all my cars on and off.

// 15. **Story**:  As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.
// console.log(myCar)
// console.log(myCar.signal())
// console.log(myCar)
// console.log(myCar.signal())

// 16. **Story**:	As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

// 17. **Story**:	As a programmer, I can speed my Tesla up by 10 per acceleration.
console.log(myTesla.accelerate()) // increase the speed to 10mph
console.log(myTesla)
// 18. **Story**:	As a programmer, I can slow my Tesla down by 7 per braking.
console.log(myTesla.brake()) // decrease the speed to 3mph
console.log(myTesla)
// 19. **Story**:	As a programmer, I can speed my Toyota up by 5 per acceleration.
console.log(myToyota.accelerate()) // increase the speed to 10mph
console.log(myToyota)
// 20. **Story**:	As a programmer, I can slow my Toyota down by 2 per braking.
console.log(myToyota.brake()) // decrease the speed to 3mph
console.log(myToyota)
// 21. **Story**:	As a programmer, I can speed my Volkswagen up by 7 per acceleration.
console.log(myVolkswagen.accelerate()) // increase the speed to 10mph
console.log(myVolkswagen)
// 22. **Story**:	As a programmer, I can slow my Volkswagen down by 5 per braking.
console.log(myVolkswagen.brake()) // decrease the speed to 3mph
console.log(myVolkswagen)
// 23. **Story**:  As a programmer, I can call upon a carInfo method that will tell me all the information about a car.
// - The method can be created in the parent class and accessed by all child classes
console.log(myCar.carInfo())
console.log(myTesla.carInfo())
console.log(myToyota.carInfo())
console.log(myVolkswagen.carInfo())