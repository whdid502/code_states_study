// function sumTo(num) {
//   // TODO: 여기에 코드를 작성합니다.
//   // 별도의 최적화 기법(memoization)은 금지됩니다.
//   if(num === 0){
//     return 0
//   }
//   return num + sumTo(num-1)
// }

// function isOdd(num) {
//   // TODO: 여기에 코드를 작성합니다.
//   if (num > 0) {
//     num -= 2
//   } else {
//     num += 2
//   }
//   if (num === 1){
//     return true
//   }else if(num === 0){
//     return false
//   }else{
//     return isOdd(num)
//   }
// }

// isOdd(5)

// function factorial(num) {
//   // TODO: 여기에 코드를 작성합니다.
//   // 별도의 최적화 기법(memoization)은 금지됩니다.
//   if(num === 1 || num === 0){
//     return 1
//   }
//   return num*factorial(num-1)
// }

// function fibonacci(num) {
//   // TODO: 여기에 코드를 작성합니다.
//   // 별도의 최적화 기법(memoization)은 금지됩니다.
//   if (num === 0) {
//     return 0
//   } else if (num === 1 || num === 2) {
//     return 1
//   } else {
//     return num + fibonacci(num - 2)
//   }
// }

// function drop(num, arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   if(num === 0 || arr.length === 0){
//     return arr
//   }else{
//     num -= 1
//     return drop(num,arr.slice(1))
//   }
// }

// drop( 3, [-1, -2, 1, 2, 3, 4, 5])

// function take(num, arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   if(arr.length <= num){
//     return arr
//   }else{
//     console.log(arr)
//     return take(num,arr.slice(0,arr.length-1))
//   }
// }

// take( 4, [-1, -2, 1, 2, 3, 4, 5])

// function and(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   if(arr.length === 0){
//     return true
//   }else{
//     console.log(arr)
//     return arr[0] && and(arr.slice(1))
//   }
// }

// and([true,true,false,true])

// function reverseArr(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   if(arr.length === 0){
//     return arr
//   }else{
//     let new_arr = reverseArr(arr.slice(1))
//     new_arr.push(arr[0])
//     console.log(new_arr)
//     return new_arr
//   }
// }

// reverseArr( [-1, -2, 1, 2, 3, 4])

// function findMatryoshka(matryoshka, size) {
//   // TODO: 여기에 코드를 작성합니다.
//   console.log(matryoshka)

//   if (matryoshka['size'] === size) {
//     return true
//   } else if (matryoshka['matryoshka'] === null || Object.keys(matryoshka).length === 0) {
//     return false
//   }
//   else {
//     return findMatryoshka(matryoshka['matryoshka'],size)
//   }

// }

// console.log(findMatryoshka({ size: 10, matryoshka: { size: 3, matryoshka: null } }, 3))

// function unpackGiftbox(giftBox, wish) {
//   // TODO: 여기에 코드를 작성합니다
//   let minibox = false
//   for (let i = 0; i < giftBox.length; i++) {
//     if (giftBox[i] === wish) {
//       return true
//     } else if (Array.isArray(giftBox[i]) && giftBox[i].length >= 0) {
//       minibox = unpackGiftbox(giftBox[i], wish)
//     }
//   }
//   return minibox || false
// }

// console.log(unpackGiftbox(['macbook', ['eyephone', [], ['postcard']], 'money'], 'postcard'))

// let arr = ['macbook', ['eyephone', [], ['postcard']], 'money']
// let arr2 = [...arr]

// console.log(arr2)

// function flattenArr(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   let new_arr = []
//   for(let i = 0 ; i < arr.length ; i ++){
//     if(Array.isArray(arr[i]) && arr[i].length > 0){
//       //arr[i] > 배열
      
//       new_arr.push(...flattenArr(arr[i]))
//     }else{
//       //arr[i] > 넘버
//       new_arr.push(arr[i])
//     }
//   }
//   return new_arr
// }
// //  [[1], 2, [3, 4], 5]
// console.log(flattenArr([1, [2], [3, [[[4]]]], 5, [6, [7, [8]]]]))

function unpackGiftbox(giftBox, wish) {
  const head = giftBox[0]
  const tail = giftBox.slice(1)
  
}