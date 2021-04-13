// // // const ForagerBee = require('./ForagerBee')

// // class RetiredForagerBee extends ForagerBee{
// //   constructor(treasureChest){
// //     super(treasureChest)
// //     this.age = 40
// //     this.job = 'gamble'
// //     this.canFly = false
// //     this.color = 'grey'
// //   }
// //   forage(){
// //     return 'I am too old, let me play cards instead'
// //   }
// //   win_gamble(treasure){
// //     this.treasureChest.push(treasure)
// //   }
// //   lose_gamble(){
// //     this.treasureChest = []
// //   }
// // }

// // let old_bee = new RetiredForagerBee
// // console.log(old_bee.forage())
// // old_bee.win_gamble('gold')
// // old_bee.win_gamble('gold')
// // old_bee.win_gamble('gold')
// // old_bee.lose_gamble()
// // console.log(old_bee)

// // ES5
// // function Animal (name, energy) {
// //   this.name = name
// //   this.energy = energy
// // } 
// // Animal.prototype.eat = function (amount) {
// //   console.log (`${this.name} is eating.`)
// //   this.energy += amount
// // }
// // Animal.prototype.sleep = function (length) {
// //   console.log (`${this.name} is sleeping.`)
// //   this.energy += length
// // }  
// // Animal.prototype.play = function (length) {
// //   console.log (`${this.name} is playing.`)
// //   this.energy -= length
// // }

// // function Dog (name, energy,breed) { //Animal -> Dog로 수정
// //   this.name = name
// //   this.energy = energy
// //   this.breed = breed 
// // } 
// // Dog.prototype.eat = function (amount) {
// //   console.log (`${this.name} is eating.`)
// //   this.energy += amount

// // Dog.prototype.sleep = function (length) {
// //   console.log (`${this.name} is sleeping.`)
// //   this.energy += length
  
// // Dog.prototype.play = function (length) {
// //   console.log (`${this.name} is playing.`)
// //   this.energy -= length
  
// // Dog.prototype.bark = function(){ //bark 속성을 추가 
// //   console.log (`Woof Woof`)
// //   this.energy
// // }

// // const Charlie = new Dog('Charlie', 10, 'Goldendoodle')

// // function Dog(name,energy,breed){
// // 	Animal.call(this, name, energy) 
// //     this.breed = breed 
  
// // Dog.prototype = Object.create(Animal.prototype)

// // const charlie = new Dog('Charlie', 10, 'Goldendoodle')  

// // charlie.play(4) //'Charlie is playing.' --> Dog에는 정의 되지 않은 play라는 속성을 사용할 수 있다. 

// // class Animal {
// //   constructor(name, energy) {
// //   this.name = name
// //   this.energy = energy
// //   } 
// //   eat(amount) {
// //   console.log (`${this.name} is eating.`)
// //   this.energy += amount
// //   }
// //   sleep() {
// //   console.log (`${this.name} is sleeping.`)
// //   this.energy += length
// //   }  
// //   play() = function (length) {
// //   console.log (`${this.name} is playing.`)
// //   this.energy -= length
// //   }
// // }
// // class Dog {
// //   constructor(name,energy,breed) {
// //     this.breed = breed
// //   }
// //   bark() {
// //     console.log ('Woof Woof') 
// //     this.energy -= .1
// //   }
// // }

// // const DancerClass = require('./DancerClass');

// /* global DancerClass */
// if (typeof window === 'undefined') {
//   global.DancerClass = require('./DancerClass');
// } // you don't have to worry about this code. this is for testing.

// // blinkyDancer를 class 키워드를 써서 ES6 방식으로 리팩토링하세요
// // 여기에는 Pseudoclassical에서 정의된 BlinkyDancer와 이름이 겹치므로, BlinkyDancerClass라는 이름을 사용합니다.
// class BlinkyDancerClass extends DancerClass {
//   // your code here
//   // constructor(top,left,time_between_steps){
//   //   super(top, left, time_between_steps)
//   // }
//   step() {
//     super.step()
//     let style = this.$node.style;
//     style.display = style.display === 'none' ? 'inline-block' : 'none';
//     style.borderRadius = `${Math.random() * 1000}px ${Math.random() * 1000}px ${Math.random() * 1000}px ${Math.random() * 1000}px` 
//     style.width = `${Math.random()*100}px`
//     style.height = `${Math.random()*100}px`
//     style.border = `10px solid #${(parseInt(Math.random()*0xffffff)).toString(16)}`


//   }

// }

// // you don't have to worry about this code. this is for testing.
//   if (typeof window === 'undefined') {
//     module.exports = BlinkyDancerClass;
//   }
