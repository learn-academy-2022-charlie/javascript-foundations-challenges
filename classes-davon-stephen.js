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
// Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.
var blackCoffee = new Coffee("black", 0, 0)
console.log(blackCoffee.coffeeProfile());

//output: ---->A black coffee with 0 cream, 0 sugar

// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
var icedCoffee = new Coffee("iced", 1, 2)
console.log(icedCoffee.coffeeProfile())
//output: ---->A iced coffee with 1 cream, 2 sugars

// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.
class Latte {
  constructor(flavorTypeString, milkTypeString, espressoShotsNumb){
    this.flavor = flavorTypeString
    this.milk = milkTypeString
    this.espresso = espressoShotsNumb
  }
  latteProfile(){
    return `A ${this.flavor} latte with ${this.milk} and ${this.espresso} espresso shots`
  }
}
// Write a method for your Latte class that outputs the latte's profile.
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
var regularLatte = new Latte("caramel", "oat milk", 1)
console.log(regularLatte.latteProfile());
//output: ---->A caramel latte with oat milk and 1 espresso shots

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
var doubleLatte = new Latte("Hazelnut", "almond milk", 2)
console.log(doubleLatte.latteProfile());
//output: ---->A Hazelnut latte with almond milk and 2 espresso shots

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
class Cylinder{
  constructor(raduisNumber,heightNumber){
      this.raduis = raduisNumber
      this.height = heightNumber
      this.π = 3.14159265359 
      this.volume = 0
  }
  cylinderVolume(){
    this.volume = this.π * this.raduis * (2 * this.height)
    return Math.round(this.volume * 10000) / 10000 
  }
}
var cylinder1 = new Cylinder(4,8)
console.log(cylinder1.cylinderVolume());
//Write the code that creates three unique cylinder objects
var cylinder2 = new Cylinder(75858,5000)
var cylinder3 = new Cylinder(6,200000)
console.log(cylinder2.cylinderVolume());
console.log(cylinder3.cylinderVolume());
