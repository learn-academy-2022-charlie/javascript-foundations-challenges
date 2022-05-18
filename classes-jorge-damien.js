// Challenges

// 1. Coffee Maker
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

//   Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.
const blackCoffee = new Coffee("Black",0, 0)
console.log(blackCoffee)
console.log(blackCoffee.coffeeProfile())
// console.log(blackCoffee.creams())

// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.