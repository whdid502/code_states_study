// function movingStuff(stuff, limit) {
//   // TODO: 여기에 코드를 작성합니다.
//   start = 0
//   count = 0
//   stuff.sort((a, b) => a - b)

//   let count_box = function (stuff, limit) {
//     let minimum = stuff[0]

//     console.log('--------')
//     console.log('박스 개수 : ', count)
//     console.log('대기중인 가장 가벼운 박스 : ', minimum, stuff.indexOf(minimum))
//     console.log('남은 박스 : ', stuff, stuff.length)

//     if (minimum + stuff[1] > limit) {
//       count += stuff.length
//       return count
//     }
//     else {
//       for (let i = stuff.length - 1; i >= 0; i--) {
//         if (minimum + stuff[i] <= limit) {
//           console.log('개수가 2개인 박스번째 : ', i, stuff[i])
//           console.log(minimum, stuff[i])

//           count++
//           stuff.splice(0, 1)
//           stuff.splice(i-1, 1)

//           return count_box(stuff, limit)
//         }
//         // else if (minimum === stuff[0]) {
//         //   console.log(stuff.length)
//         //   count = count + stuff.length
//         //   // break
//         //   // return count
//         // }

//       }
//     }
//   }
//   count_box(stuff, limit)
//   console.log(count)
//   return count

// }

// // function movingStuff(stuff, limit) {
// //   stuff.sort((a, b) => a - b)
// //   // console.log(stuff)
// //   let contained = []
// //   let j = 0
// //   let count = 1
// //   let minimum = stuff[j]

// //   for (let i = 0; i < stuff.length; i++) {

// //     for (let j = stuff.length - 1; j >= 0; j--) {

// //       if (!contained.includes(stuff[i]) && !contained.includes(stuff[j])) {

// //         if (stuff[i] + stuff[j] <= limit || stuff[i] === stuff[j]) {
// //           count++
// //           console.log(count)
// //           contained.push(stuff[j])
// //         }
// //       }
// //     }
// //   }
// //   // console.log(count)

// // }

// let output = movingStuff([42, 25, 60, 73, 103, 167], 187);
// console.log(output);

// function ocean(target, type) {
//   // TODO: 여기에 코드를 작성합니다.
//   let money_type = {}

// }
let target = 50
let bag = [1]; // 0을 만드는 방법의 수는 아무것도 선택하지 않는 [0, 0, 0]과 같은 한 가지 뿐임.
// bag[1]~bag[target] 까지 chaining을 위한 공간을 만들어놓자.
for(let i = 1; i <= target; i++){
  bag[i] = 0; // 기본값으로 0 을 채워넣자. bag[2] = bag[2] + bag[2-1 || 2-0] ~ bag[target] = bag[target] + bag[target - type[i]]
}
console.log(bag)