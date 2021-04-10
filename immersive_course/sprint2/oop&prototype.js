// const ForagerBee = require('./ForagerBee')

class RetiredForagerBee extends ForagerBee{
  constructor(treasureChest){
    super(treasureChest)
    this.age = 40
    this.job = 'gamble'
    this.canFly = false
    this.color = 'grey'
  }
  forage(){
    return 'I am too old, let me play cards instead'
  }
  win_gamble(treasure){
    this.treasureChest.push(treasure)
  }
  lose_gamble(){
    this.treasureChest = []
  }
}

let old_bee = new RetiredForagerBee
console.log(old_bee.forage())
old_bee.win_gamble('gold')
old_bee.win_gamble('gold')
old_bee.win_gamble('gold')
old_bee.lose_gamble()
console.log(old_bee)