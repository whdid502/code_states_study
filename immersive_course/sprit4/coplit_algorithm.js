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
// let target = 50
// let bag = [1]; // 0을 만드는 방법의 수는 아무것도 선택하지 않는 [0, 0, 0]과 같은 한 가지 뿐임.
// // bag[1]~bag[target] 까지 chaining을 위한 공간을 만들어놓자.
// for(let i = 1; i <= target; i++){
//   bag[i] = 0; // 기본값으로 0 을 채워넣자. bag[2] = bag[2] + bag[2-1 || 2-0] ~ bag[target] = bag[target] + bag[target - type[i]]
// }
// console.log(bag)

// function orderOfPresentation(n, k) {
//   // TODO: 여기에 코드를 작성합니다.
//   // 모든 경우의 수의 개수를 구하자 > n!
//   // k 가 넘버일경우
//   // ㅏ+1/n을 해서 몫번째 인덱스의 나머지 번째르 ㄹ구하고
//   // k가 배열일 경우
//   // k[0]의 인덱스부터 시작해서 
//   let arr = []
//   for (let i = 1; i <= n; i++) {
//     arr.push(i)
//   }
//   let num = arr.length

//   function permutation(arr, selectNum) {
//     let result = [];
//     if (selectNum === 1) return arr.map((v) => [v]);

//     arr.forEach((v, idx, arr) => {
//       const fixer = v;
//       const restArr = arr.filter((_, index) => index !== idx);
//       const permuationArr = permutation(restArr, selectNum - 1);
//       const combineFixer = permuationArr.map((v) => [fixer, ...v]);
//       result.push(...combineFixer);
//     });
//     return result;
//   }

//   let perArr = permutation(arr, num)

//   if (typeof k === 'number') {
//     return perArr[k]
//   }
//   else if (Array.isArray(k)) {
//     let strArr = []
//     let strK = k.reduce((arr,cur) => String(arr) + String(cur))
//     for (let key of perArr) {
//       strArr.push(key.reduce((arr, cur) => String(arr) + String(cur)))
//     }
//     for(let key of strArr){
//       if(key === strK){
//         return strArr.indexOf(key)
//       }
//     }
//   }
// }

// let output = orderOfPresentation(9, 135627);
// console.log(output); // [2,3,1]

// function boringBlackjack(cards) {
//   // TODO: 여기에 코드를 작성합니다.
//   function combination(arr, selectNum) {
//     const result = [];
//     if (selectNum === 1) return arr.map((v) => [v]);
//     arr.forEach((v, idx, arr) => {
//       const fixed = v;
//       const restArr = arr.slice(idx + 1);
//       const combinationArr = combination(restArr, selectNum - 1);
//       const combineFix = combinationArr.map((v) => [fixed, ...v]);
//       result.push(...combineFix);
//     });
//     return result;
//   }
//   let comb = combination(cards,3)
//   // console.log(comb)

//   function isPrime(num) {
//     let count = 0
//     for (i = 1; i <= num ; i++){
//         if(num%i === 0){
//             count = count + 1
//         }
//     }
//     if (count === 2){
//         return true
//     }else{
//         return false
//     }
//   }
//   let count = 0
//   for(let key of comb){
//     keySum = key.reduce((arr,cur) => arr + cur)
//     // console.log(keySum)
//     if(isPrime(keySum)){
//       count++
//     }
//   }
//   return count

// }

// let output = boringBlackjack([3, 5, 7, 11, 19, 22, 27, 29, 33, 39, 41, 49]);
// console.log(output); // 1

// function divideChocolateStick(A, N) {
//   // TODO: 여기에 코드를 작성합니다.
//   let bigger = A > N ? A : N
//   let smaller = A < N ? A : N
//   let makeGCD = function (bigger, smaller) {
//     if (smaller === 0) {
//       return bigger
//     } else {
//       return makeGCD(smaller, bigger % smaller)
//     }
//   }

//   let result = []
//   let GCD = makeGCD(bigger, smaller)

//   let root = Math.floor(Math.sqrt(GCD))//6 > 3
//   console.log(root)

//   // let makeArr = function (GCD, root) {
//   //   while (GCD % root !== 0) {
//   //     root--
//   //   }
//   //   if (GCD % root === 0) {
//   //     result.push([root, A / root, N / root])
//   //     result.push([GCD / root, A / (GCD / root), N / (GCD / root)])
//   //     root--
//   //     makeArr(GCD, root)
//   //   }
//   //   return result
//   // }
//   // makeArr(GCD, root)
//   // console.log(result)

// }

// const result4 = divideChocolateStick(1000000000, 1000000000)
// console.log(result4)

// // const result2 = divideChocolateStick(72, 102);
// // console.log(result2)

// function divideChocolateStick2(A, N) {
//   let getGCD = (a, b) => { //최대공약수를 구하는 함수이다.
//     let gcd = 1;
//     for(let i = 2; i <= Math.min(a, b); i++){
//       if(a % i === 0 && b % i === 0){
//         gcd = i;
//       }
//     }
//     return gcd;
//   }
  
//   let a = getGCD(A, N); //최대공약수가 저장되어있다.

//   let result = [];

//   let getFactors = (num) => { //최대공약수의 제곱근의 약수를 구하는 함수이다.
//     for(let i = 1; i*i <= num; i++) {
//       if(num % i === 0) {
//         result.push(i);
//       }
//     }
//     return result;
//   }
  
//   let b = getFactors(a); //최대공약수의 제곱근의 약수가 저장되어있다.
  
//   for(let i = result.length-1; i >= 0; i--) { //나머지 약수를 구한다. [1, 2] a = 4
//     if(!result.includes(a/result[i])) {
//       result.push(a/result[i]); [1, 2, 4]
//     }
//   }

//   let divide = [];
//   for(let i = 0; i < result.length; i++) { //빼빼로를 나눠준다.
//     divide.push([result[i], A/result[i], N/result[i]]);
//   }
//   for(let key of divide){
//     if(key[0] === 31250){
//       console.log(divide.indexOf(key), divide.length)
//     }
//   }
//   return divide;
// }

// // const result4 = divideChocolateStick2(1000000000, 1000000000)
// // console.log(result4)

function divideChocolateStick(A, N) {
  function getGCD(minNum, maxNum){
    return (minNum % maxNum) === 0 ? maxNum : getGCD(maxNum, minNum % maxNum);
  }
  
  let a = getGCD(A, N); //최대공약수가 저장되어있다.

  let result = [];

  let getFactors = (num) => { //최대공약수의 제곱근의 약수를 구하는 함수이다.
    for(let i = 1; i*i <= num; i++) {
      if(num % i === 0) {
        result.push(i);
      }
    }
    return result;
  }
  
  let b = getFactors(a); //최대공약수의 제곱근의 약수가 저장되어있다.
  
  for(let i = result.length-1; i >= 0; i--) { //나머지 약수를 구한다. [1, 2] a = 4
    if(!result.includes(a/result[i])) {
      result.push(a/result[i]); [1, 2, 4]
    }
  }

  let divide = [];
  for(let i = 0; i < result.length; i++) { //빼빼로를 나눠준다.
    divide.push([result[i], A/result[i], N/result[i]]);
  }
  return divide;
}

const result4 = divideChocolateStick(1000000000, 1000000000)
console.log(result4)

function divideChocolateStick(A, N) {
  let getGCD = (A, N) => {
    return (A % N) === 0 ? N : getGCD(N, A % N);
  }
  
  let a = getGCD(A, N); //최대공약수가 저장되어있다.

  let result = [];

  let getFactors = (num) => { //최대공약수의 제곱근의 약수를 구하는 함수이다.
    for(let i = 1; i*i <= num; i++) {
      if(num % i === 0) {
        result.push(i);
      }
    }
    return result;
  }
  
  let b = getFactors(a); //최대공약수의 제곱근의 약수가 저장되어있다.
  
  for(let i = result.length-1; i >= 0; i--) { //나머지 약수를 구한다. [1, 2] a = 4
    if(!result.includes(a/result[i])) {
      result.push(a/result[i]); [1, 2, 4]
    }
  }

  let divide = [];
  for(let i = 0; i < result.length; i++) { //빼빼로를 나눠준다.
    divide.push([result[i], A/result[i], N/result[i]]);
  }
  return divide;
}