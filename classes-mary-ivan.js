// Coffee Maker
class Coffee {
  constructor(type, cream, sugar){
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
  }

  creams(){
    if(this.cream > 1){
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars(){
    if(this.sugar > 1){
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}
// // Write the code that makes a black coffee.
// let drink = new Coffee ("black coffee", "no cream", "none")
// console.log(drink)
//
// // Then write the code that outputs the coffee's profile.
// console.log(drink.coffeeProfile())

// // Write the code that makes a coffee with 1 cream and 2 sugars.
// let drink2 = new Coffee ("coffeeCreamSugar", 1, 2)
// console.log(drink2)
// // Then write the code that outputs the coffee's profile.
// console.log(drink2.coffeeProfile())

// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.
class Latte {
  constructor(flavor, milkType, numberOfShots) {
    this.flavor = flavor
    this.milkType = milkType
    this.numberOfShots = numberOfShots
  }
  latteProfile(){
    return `This latte takes ${this.flavor} with ${this.milkType}, and ${this.numberOfShots} shots of espresso.`
  }
  // creams(){
  //   if(this.cream > 1){
  //     return `${this.cream} creams`
  //   } else {
  //     return `${this.cream} cream`
  //   }
  // }
}
// Write a method for your Latte class that outputs the latte's profile.
let chaiTeaLatte = new Latte ("chai tea", "whole milk", 10)
console.log(chaiTeaLatte.latteProfile())

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

let regLatte = new Latte ("vanilla", "whole milk", 1)
console.log(regLatte.latteProfile())


// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

  let hazLatte = new Latte ("hazelnut", "almond milk", 2)
console.log(hazLatte.latteProfile())


// Volume of a Cylinder

// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

    class Cylinder { 
      constructor (radius, height){
        this.radius = radius
        this.height = height
        }
        volCylinder() {
          return π * this.radius * 2 * this.height 
        }
    }
let π = Math.PI
let sphere = new Cylinder ( 10 , 25)
let rounded = sphere.volCylinder().toFixed(4)
// console.log(sphere)

// console.log(sphere.volCylinder())

console.log(rounded)




let newSphere = new Cylinder ( 5, 10)

console.log(newSphere)







// Write the code that creates three unique cylinder objects
//

























