// // const ForagerBee = require('./ForagerBee')

// class RetiredForagerBee extends ForagerBee{
//   constructor(treasureChest){
//     super(treasureChest)
//     this.age = 40
//     this.job = 'gamble'
//     this.canFly = false
//     this.color = 'grey'
//   }
//   forage(){
//     return 'I am too old, let me play cards instead'
//   }
//   win_gamble(treasure){
//     this.treasureChest.push(treasure)
//   }
//   lose_gamble(){
//     this.treasureChest = []
//   }
// }

// let old_bee = new RetiredForagerBee
// console.log(old_bee.forage())
// old_bee.win_gamble('gold')
// old_bee.win_gamble('gold')
// old_bee.win_gamble('gold')
// old_bee.lose_gamble()
// console.log(old_bee)

// ES5
// function Animal (name, energy) {
//   this.name = name
//   this.energy = energy
// } 
// Animal.prototype.eat = function (amount) {
//   console.log (`${this.name} is eating.`)
//   this.energy += amount
// }
// Animal.prototype.sleep = function (length) {
//   console.log (`${this.name} is sleeping.`)
//   this.energy += length
// }  
// Animal.prototype.play = function (length) {
//   console.log (`${this.name} is playing.`)
//   this.energy -= length
// }

// function Dog (name, energy,breed) { //Animal -> Dog로 수정
//   this.name = name
//   this.energy = energy
//   this.breed = breed 
// } 
// Dog.prototype.eat = function (amount) {
//   console.log (`${this.name} is eating.`)
//   this.energy += amount

// Dog.prototype.sleep = function (length) {
//   console.log (`${this.name} is sleeping.`)
//   this.energy += length
  
// Dog.prototype.play = function (length) {
//   console.log (`${this.name} is playing.`)
//   this.energy -= length
  
// Dog.prototype.bark = function(){ //bark 속성을 추가 
//   console.log (`Woof Woof`)
//   this.energy
// }

// const Charlie = new Dog('Charlie', 10, 'Goldendoodle')

// function Dog(name,energy,breed){
// 	Animal.call(this, name, energy) 
//     this.breed = breed 
  
// Dog.prototype = Object.create(Animal.prototype)

// const charlie = new Dog('Charlie', 10, 'Goldendoodle')  

// charlie.play(4) //'Charlie is playing.' --> Dog에는 정의 되지 않은 play라는 속성을 사용할 수 있다. 

// class Animal {
//   constructor(name, energy) {
//   this.name = name
//   this.energy = energy
//   } 
//   eat(amount) {
//   console.log (`${this.name} is eating.`)
//   this.energy += amount
//   }
//   sleep() {
//   console.log (`${this.name} is sleeping.`)
//   this.energy += length
//   }  
//   play() = function (length) {
//   console.log (`${this.name} is playing.`)
//   this.energy -= length
//   }
// }
// class Dog {
//   constructor(name,energy,breed) {
//     this.breed = breed
//   }
//   bark() {
//     console.log ('Woof Woof') 
//     this.energy -= .1
//   }
// }