// function make_counter(){
//   let value = 0
//   return {
//     increase: function(){
//       value++
//     },
//     decrease: function(){
//       value--
//     },
//     get_value: function(){
//       return value;
//     }
//   }
// }

// let counter1 = make_counter()
// counter1.increase()
// console.log(counter1.get_value())

// let counter2 = make_counter()
// counter2.decrease()
// counter2.decrease()
// console.log(counter2.get_value())

// class counter{
//   constructor(){
//     this.value = 0
//   }
//   increase(){
//     this.value++
//   }
//   decrease(){
//     this.value--
//   }
//   get_value(){
//     return this.value
//   }
// }

// let counter3 = new counter()
// counter3.increase()
// console.log(counter3.get_value())
// console.log(counter3.value)

// let counter4 = new counter()
// counter4.decrease()
// counter4.decrease()
// console.log(counter4.get_value())
// console.log(counter4.value)

function raid_member(level, pre_stage) {
  this.level = level
  this.pre_stage = pre_stage
}
function raid_member_warrior(level, pre_stage) {
  raid_member.call(this, level, pre_stage)
  this.job = 'warrior'
}
let main_tanker = new raid_member_warrior(105, 'done')
console.log(main_tanker)