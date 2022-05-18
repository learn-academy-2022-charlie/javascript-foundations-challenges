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

var blackCoffe = new Coffee("black", 0, 0)
//console.log(blackCoffe.coffeeProfile())

// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.

var regCoffee = new Coffee("regular", 1, 2)
//console.log(regCoffee.coffeeProfile())
// Latte Maker
class LatteMaker{
  constructor(flavorString, milkString, shotsNum){
    this.flavor = flavorString
    this.milk = milkString
    this.shot = shotsNum

  }
  latteProfile(){
    return `A ${this.flavor} latte with ${this.milk}, ${this.shots()}`
  }
  shots(){
    if(this.shot > 1){
      return `${this.shot} shots`
    } else {
      return `${this.shot} shot`
    }
  }
}
// Write a Latte class that takes a flavor, a milk type and a number of shots.

// Write a method for your Latte class that outputs the latte's profile.

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
var regLatte = new LatteMaker("regular", "no milk", 1)
//console.log(regLatte.latteProfile())


// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
var hazelLatte = new LatteMaker("hazelnut", "almond milk", 2)
//console.log(hazelLatte.latteProfile())


// Volume of a Cylinder
class VolCyl {
  constructor(r, h){
    this.radius = r
    this.height = h
  }
  cylinderVolume (){
    let beforeRound = this.height * math.PI * this.radius ** 2 * 10000
    return Math.round(beforeRound) / 10000
  }
}


// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

// Write the code that creates three unique cylinder objects

const radiusArray = [13, 76, 45]
const heightArray = [21, 30, 30]

const cylinderObjectGen = (arrayR, arrayH) =>{
  if(arrayR.length !== arrayH.length){
    return "missmatched number of radii and heights"
  }
  let cylinders = []
  for(i = 0; i < arrayR.length; i++ ){
    cylinders[i] = `cylinders${i +1}`
    
  }
  var cylinderObjects = []
  for(i = 0; i < arrayR.length; i++ ){
    cylinderObjects[i] = new VolCyl(arrayR[i], arrayH[i])
  }
  return cylinderObjects.map(value => value)
}
console.log(cylinderObjectGen(radiusArray, heightArray))
