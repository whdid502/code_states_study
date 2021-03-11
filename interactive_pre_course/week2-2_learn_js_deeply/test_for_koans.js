// // console.log(123-'1')
// // console.log(1+true)
// // // 0
// // let funcExpressed = 'to be a function';

// // console.log(typeof funcDeclared)
// // console.log(typeof funcExpressed)

// // // expect(typeof funcDeclared).to.equal('function');

// // function funcDeclared() {
// //     return 'this is a function declaration';
// // }

// // funcExpressed = function () {
// //     return 'this is a function expression';
// // };
// // let message = 'Outer';

// // function getMessage() {
// //     return message;
// // }

// // function shadowGlobal() {
// //     let message = 'Inner';
// //     return message;
// // }

// // function shadowGlobal2(message) {
// //     return message;
// // }

// // function shadowParameter(message) {
// //     message = 'Do not use parameters like this!';
// //     return message;
// // }
// // console.log(getMessage())
// // console.log(shadowGlobal())
// // console.log(shadowGlobal2('Parameter'))
// // console.log(shadowParameter('Parameter'))
// // console.log(message)

// let age = 27;
// let name = 'jin';
// let height = 179;

// function outerFn() {
//     let age = 24;
//     name = 'jimin';
//     let height = 178;

//     function innerFn() {
//         age = 26;
//         let name = 'suga';
//         return height;
//     }

//     innerFn();

//     // expect(age).to.equal(26);
//     // expect(name).to.equal('jimin');
//     console.log(age)
//     console.log(name)

//     return innerFn;
// }

// // outerFn()

// const innerFn = outerFn();

// console.log(age)
// console.log(name)
// console.log(innerFn())

// const arr = [1, 2, 3];
// console.log(arr.length)

// const ages = [22, 23, 27];
// allowedToDrink = ages;

// console.log(ages === allowedToDrink)
// console.log(allowedToDrink === [1,2,3])

// const nums1 = [1, 2, 3];
// const nums2 = [1, 2, 3];
// console.log([nums1 === nums2])
// const arr = [];
// console.log(typeof arr)
// console.log(arr.length)

// const arr2 = [
//     function(){
//         return 3
//     }
// ]
// console.log(arr2[0]())

// const arr = ['peanut', 'butter', 'and', 'jelly'];

// // console.log(arr.slice(0))
// // console.log(arr)
// console.log(arr.s)

// const obj = {}

// console.log(obj.length)

// const megalomaniac = {
//     mastermind: 'Joker',
//     henchwoman: 'Harley',
//     getMembers: function () {
//       return [this.mastermind, this.henchwoman];
//     },
//     relations: ['Anarky', 'Duela Dent', 'Lucy'],
//     twins: {
//       'Jared Leto': 'Suicide Squad',
//       'Joaquin Phoenix': 'Joker',
//       'Heath Ledger': 'The Dark Knight',
//       'Jack Nicholson': 'Tim Burton Batman',
//     },
//   };

//   console.log(megalomaniac.henchwoman)

// const currentYear = new Date()

// console.log(currentYear)

// const obj = {
//     mastermind: 'Joker',
//     henchwoman: 'Harley',
//     relations: ['Anarky', 'Duela Dent', 'Lucy'],
//     twins: {
//       'Jared Leto': 'Suicide Squad',
//       'Joaquin Phoenix': 'Joker',
//       'Heath Ledger': 'The Dark Knight',
//       'Jack Nicholson': 'Tim Burton Batman',
//     },
//   };

//   const copiedObj = Object.assign({},obj)

//   console.log(copiedObj)

// function returnFirstArg(firstArg) {
//     return firstArg;
// }

// console.log('first', 'second', 'third')

// function returnSecondArg(firstArg, secondArg) {
//     return secondArg;
// }

// console.log(returnSecondArg('a'))

function getAllParamsByRestParameter(...args) {
    return args;
}

function getAllParamsByArgumentsObj() {
    return arguments;
}

const restParams = getAllParamsByRestParameter('first', 'second', 'third');
const argumentsObj = getAllParamsByArgumentsObj('first', 'second', 'third');
const argsArr = Array.from(argumentsObj);

console.log(argsArr)
// console.log(typeof restParams)
// console.log(typeof argumentsObj)