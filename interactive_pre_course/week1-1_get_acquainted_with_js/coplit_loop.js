// function makeMultiplesOfDigit2(num1, num2) {
//     // TODO: 여기에 코드를 작성합니다.
//     let result = 0
//     if(num1 >= num2){
//       for (let i = num2; i <= num1 ; i++){
//         if(i%2 === 0){
//           result += 1
//           console.log(i)
//           console.log(result)
//         }
//       }
//     }else{
//       for(let i = num1 ; i <= num2 ; i++){
//         if(i%2 === 0){
//           result += 1
//           console.log(i)
//           console.log(result)
//         }
//       }
//     }
//     return result
//   }

// makeMultiplesOfDigit2(0,9)

// function getMaxNumberFromString(str) {
//     // TODO: 여기에 코드를 작성합니다.
//     if (str.length === 0){
//       return '0'
//     }
//     const numbs_arr = []
//     for (const numb of str){
//       numbs_arr.push(Number(numb))
//     }
//     // console.log(numbs_arr)
//     return String(Math.max.apply(null, numbs_arr))
//   }

// // console.log(getMaxNumberFromString('  '))

// function replaceAll(str, from, to){
//     let result = ''
//     for (let letter of str){
//         if(letter === from){
//             result = result + to
//         }else{
//             result = result + letter
//         }
//     }
//     console.log(result)
//     return result
// }
// replaceAll('i love boo', 'o', 't')

// let word = 'loop'

// let word2 = word[1] = 'e'

// console.log(word2)

// function characterAndNumber(word) {
//     // TODO: 여기에 코드를 작성합니다.
//     let result = ''
//     let i = 0
//     for (let letter of word){
//         result = result + letter + i
//         i = i + 1
//     }
//     console.log(result)
//     return result
//   }

// characterAndNumber('fanta')

// function computePower(base, exponent) {
//     // TODO: 여기에 코드를 작성합니다.
//     result = 1
//     for (let i = 1; i <= exponent; i++){
//       result = result * base
//     }
//     return result
//   }

// console.log(computePower(2,10))

// function getSumOfFactors(num) {
//     // TODO: 여기에 코드를 작성합니다.
//     let result = 0
//     for (let i = 1; i <= num; i++){
//         if (num%i === 0){
//             result = result + i
//         }
//     }
//     return result
//   }

// console.log(getSumOfFactors(8))

// function isPrime(num) {
//     // TODO: 여기에 코드를 작성합니다.
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

// console.log(isPrime(10))

// function listPrimes(num) {
//     // TODO: 여기에 코드를 작성합니다.
//     let result = '2'
//     for(let i = 3 ; i <= num ; i++){

//         let count = 0
//         for (n = 1; n <= i ; n++){
//             if(i%n === 0){
//                 count = count + 1
//             }     
//         }

//         if (count === 2){
//             result = result + '-' + i
//         }
//     }
//     return result
//   }

// console.log(listPrimes(18))

// function makePermutations(str) {
//     if(str.length === 0){
//         return ''
//     }
//     let result = ''
//     let letter_arr = []
//     for (let letter of str){
//         letter_arr.push(letter)
//     }
//     let arr_len = letter_arr.length
//     for(let m = 0 ; m < arr_len ; m++){
//         for (let i = 0; i < arr_len ; i++){
//             result = result + ',' + letter_arr[m] + letter_arr[i]
//         }
//     }
//     result = result.substring(1,result.length+1)
//     return result
// }

// console.log(makePermutations('abc'))

// function hasRepeatedCharacter(str) {
//     // TODO: 여기에 코드를 작성합니다.
//     if(str.length === 0){
//         return false
//     }

//     for (i = 0 ; i < str.length ; i ++){
//         let count = 0
//         for (let letter of str){
//             if (str[i] === letter){
//                 count = count + 1
//             }
//         if (count > 1){
//             return true
//         }
//         }
//     }
//     return false
// }

// console.log(hasRepeatedCharacter('abcede'))

// function makeMarginalString(str) {
//     // TODO: 여기에 코드를 작성합니다.
//     let result = ''
//     for (i = 0 ; i <=  str.length ; i ++){
//         let add_word = ''
//         for(n = 0 ; n < i ; n ++){
//             add_word = add_word + str[n]
//         }
//         result = result + add_word
//     }
//     return result
//   }

//   console.log(makeMarginalString('flower'))

function findTheBug(str) {
    let count = 0
    for (let key of str){
        // console.log(key)
        if (key === '#'){
            return count
        }
        count ++
    }
}

let output = findTheBug('wo#rd');
console.log(output); // --> 2
