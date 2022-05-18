// Challenges

// 1. Coffee Maker
// class Coffee {
//     constructor(type, cream, sugar){
//       this.type = type.toLowerCase()
//       this.cream = cream
//       this.sugar = sugar
//     }
  
//     coffeeProfile(){
//       return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//     }
  
//     creams(){
//       if(this.cream > 1){
//         return `${this.cream} creams`
//       } else {
//         return `${this.cream} cream`
//       }
//     }
  
//     sugars(){
//       if(this.sugar > 1){
//         return `${this.sugar} sugars`
//       } else {
//         return `${this.sugar} sugar`
//       }
//     }
//   }

//   Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.
// const blackCoffee = new Coffee("Black",0, 0)
// console.log(blackCoffee)
// console.log(blackCoffee.coffeeProfile())
// console.log(blackCoffee.creams())

// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.

// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.
// Write a method for your Latte class that outputs the latte's profile.
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

//   class Latte {
//     constructor (flavor, milk, shot){
//     this.flavor = flavor.toLowerCase()
//     this.milk = milk
//     this.shot = shot
//   }
  
//   latteProfile (){
//     return `A ${this.flavor} latte has ${this.milk} milk and ${this.shots()} of expresso.`
//   }

//   shots(){
//     if(this.shot > 1) {
//       return `${this.shot} shots`  
//     } else {
//       return `${this.shot} shot`
//     }
//   }
// }
//   const regularLatte = new Latte ("regular", "regular", 1)
//   console.log(regularLatte.latteProfile())
//   const dblHazelnutLatte = new Latte ("Hazelnut", "almond", 2)
//   console.log(dblHazelnutLatte.latteProfile())