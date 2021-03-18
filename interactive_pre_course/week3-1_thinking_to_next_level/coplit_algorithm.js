// function transformFirstAndLast(arr) {
//   let resultObj = {}
//   if(arr.length === 0){
//     return resultObj
//   }else if(arr.length === 1){
//     resultObj[arr[0]] = arr[0]
//     return resultObj 
//   }else{
//     resultObj[arr[0]] = arr[arr.length-1]
//     return resultObj
//   }
// }

// function computeWhenDouble(interestRate) {
//   // TODO: 여기에 코드를 작성합니다.
//   if (interestRate >= 100) {
//     return 1
//   } else {
//     let base = 100;
//     let nextYear = base + (base * interestRate * 0.01)
//     let i = 1;
//     while (base * 2 >= nextYear) {
//       nextYear = nextYear + (nextYear * interestRate * (1 / 100));
//       i++;
//       console.log(base, nextYear)
//       if (base * 2 < nextYear) {
//         console.log(i)
//         return i + 1
//       }
//     }
//   }
// }

// computeWhenDouble(2.3)

// function powerOfTwo(num) {
//   let divededByTwo = num/2
//   let restByTwo = num%2
//   if(num === 1){
//     return true
//   }else{
//     while(restByTwo === 0){
//       divededByTwo = divededByTwo/2
//       restByTwo = divededByTwo%2
//     }
//     if (divededByTwo === 1){
//       return true
//     }else{
//       return false
//     }
//   }
// }

// console.log(powerOfTwo(40))

// function firstCharacter(str) {
//   // TODO: 여기에 코드를 작성합니다.
//   let strings = str.split(' ')
//   let result = ''
//   console.log(strings)
//   if (str.length === 0) {
//     return ''
//   } else {
//     for (let i = 0; i < strings.length; i++) {
//       result = result + strings[i][0]
//     }
//     console.log(result)
//     return result
//   }
// }

// firstCharacter('The community at Code States might be the biggest asset')

// function firstReverse(str) {
//   let strings = str.split('')
//   console.log(strings)
//   let reverseStrings = strings.reverse()
//   console.log(reverseStrings)
//   let result = String(reverseStrings.join(''))
//   console.log(result)
//   return result
// }

// firstReverse('I love codestates')

// function powerOfTwo(num) {
//   let divededByTwo = num/2
//   let restByTwo = num%2
//   if(num === 1){
//     return true
//   }else{
//     while(restByTwo === 0){
//       divededByTwo = divededByTwo/2
//       restByTwo = divededByTwo%2
//     }
//     if (divededByTwo === 1){
//       return true
//     }else{
//       return false
//     }
//   }
// }

// console.log(powerOfTwo(16))
// console.log(0/2)

// function letterCapitalize(str) {
//   // TODO: 여기에 코드를 작성합니다.

//   if (str.length === 0) {
//     return ''
//   } else {
//     let strings = str.split('')
//     for (let i = 1; i < strings.length; i++) {
//       if (strings[i - 1] === ' ') {
//         let upperStr = strings[i].toUpperCase()
//         strings[i] = upperStr
//       }
//     }
//     const firstWord = strings[0].toUpperCase()
//     strings[0] = firstWord
//     // console.log(strings.join(''))
//     return strings.join('')
//   }
// }

// letterCapitalize('javascript  is sexy ');

// function convertListToObject(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   let resultObj = {}
//   if (arr.length === 0) {
//     return resultObj
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].length !== 0) {
//         if (!(Object.keys(resultObj).includes(arr[i][0]))) {
//           resultObj[arr[i][0]] = arr[i][1]
//         }

//       }
//       console.log(Object.keys(resultObj))
//     }
//   }
//   console.log(resultObj)
//   return resultObj
// }

// const arr = [['some', 'like'], ['first', 'second'], ['mike', 'ike'], ['first', 'Fox'], ['melee', 'brawl']]

// convertListToObject(arr)

// function convertDoubleSpaceToSingle(str) {
//   // TODO: 여기에 코드를 작성합니다.
//   let strings = str.split(' ')
//   // console.log(strings)
//   let newStrings = []
//   for (let i = 0 ; i < strings.length ; i++){
//     if(strings[i].length !== 0){
//       newStrings.push(strings[i])
//     }
//   }
//   // console.log(newStrings)
//   let result = newStrings.join(' ')
//   // console.log(result)
//   return result
// }

// convertDoubleSpaceToSingle('string  with  double  spaces');

// function ABCheck(str) {
//   // code goes here
//   let lowerStr = str.toLowerCase()
//   let strArray = lowerStr.split('')
//   let aIndex = []
//   let bIndex = []
//   let distances = []
//   for (let i = 0; i < strArray.length ; i++){
//     if(strArray[i] === 'a'){
//       aIndex.push(i)
//     }else if(strArray[i] === 'b'){
//       bIndex.push(i)
//     }
//   }
//   for (let a = 0 ; a < aIndex.length ; a++){
//     for (let b = 0 ; b < bIndex.length ; b++){
//       let distance = Math.abs(aIndex[a] - bIndex[b])-1
//       distances.push(distance)
//     }
//   }
//   if(distances.includes(5)){
//     return true
//   }else{
//     return flase
//   }
// }

// ABCheck('lane Badesfeborraoweaddddmmm mdbddmdda');



// let newArr = arr.substr(0,2).concat('-').concat(arr.substr(2,4))
// console.log(newArr)

// function insertDash(str) {
//   for(let i = 1 ;  i < str.length ; i++){
//    if(Number(str[i-1])%2 === 1 && Number(str[i])%2 === 1){
//       str = str.substr(0,i).concat('-').concat(str.substr(i,str.length-1))
//     }    
//   }
//   return str
// }

// insertDash('454793');

// function insertDash(str) {
//   str = str.split('');
//   let front;
//   let back;
//   let newArray

//   for (let i = 1; i < str.length; i++) {
//     if ((Number(str[i - 1]) % 2 === 1) && (Number(str[i]) % 2 === 1)) {

//       front = str.slice(0, str[i])
//       back = str.slice(str[i], str.length-1)
//       str = front.concat('-').concat(back)
//       // console.log(i)
//     }
//   }
//   // console.log(str)
//   str = str.join('');
//   return str;
// }

// insertDash('6734611997679419173')

// function removeExtremes(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   let arrLength = []
//   for (let i = 0; i < arr.length; i++) {
//     arrLength.push(arr[i].length)
//   }
//   let maxLen = Math.max.apply(null, arrLength)
//   let minLen = Math.min.apply(null, arrLength)
//   let maxCount = 0
//   let minCount = 0

//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (maxCount === 0 && arr[i].length === maxLen) {
//       maxCount += 1
//       arr.splice(i, 1)
//     }
//   }
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (minCount === 0 && arr[i].length === minLen) {
//       minCount += 1
//       arr.splice(i, 1)
//     }
//   }
//   console.log(arr)


//   return arr
// }

// // removeExtremes(['iAmLongest', 'iAmNotShortest', 'iAmLongest', 'long'])
// removeExtremes(['a', 'c', 'def'])

// function findBugInApples(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   let bIndex = []
//   for(let i = 0 ; i < arr.length ; i++){
//     for( let n = 0 ; n < arr[i].length; n++){
//       if(arr[i][n] === 'B'){
//         bIndex.push(i)
//         bIndex.push(n)
//       }
//     }
//   }
//   console.log(bIndex)
//   return bIndex
// }

// findBugInApples([
//   ['A', 'A', 'A', 'A', 'A'],
//   ['A', 'B', 'A', 'A', 'A'],
//   ['A', 'A', 'A', 'A', 'A'],
//   ['A', 'A', 'A', 'A', 'A'],
//   ['A', 'A', 'A', 'A', 'A'],
// ]);


// let test = 'ddd'

// console.log(test[3])

// function readVertically(arr) {
//   // code goes here
//   let vertList = []
//   let arrLenList = arr.map((el) => el.length)
//   let maxLen = Math.max(...arrLenList)
//   // console.log(maxLen)
//   for (let i = 0; i < maxLen; i++) {
//     for (let n = 0; n < arr.length; n++) {
//       // console.log(arr[n][i])
//       if (arr[n][i] === undefined) {
//         vertList.push('')
//       } else {
//         vertList.push(arr[n][i])
//       }
//     }
//   }
//   // console.log(vertList)
//   return vertList.join('')
// }

// input = ['YCDt',
//   'oao',
//   'unI']

// console.log(readVertically(input))

// function superIncreasing(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   let preArr
//   let preSum
//   for(let i = 1 ; i < arr.length ; i++){
//     preArr = arr.slice(0,i)
//     preSum = preArr.reduce((acc,cur) => acc+cur)2
//     console.log(preArr)
//     console.log(arr[i])
//     if(arr[i] <= preSum){
//       return false
//     }
//   }
//   return true
// }

// console.log(superIncreasing( [2456, -826, 32, 553, -1346, 376, 1969, -47]))

// console.log(superIncreasing( [612, 1226]))

// function modulo(num1, num2) {
//   // TODO: 여기에 코드를 작성합니다.
//   let remainder = num1 - num2

//   if (num2 === 0) {
//     return 'Error: cannot divide by zero'
//   } else {

//     if (num1 > num2) {
//       while (remainder >= num2) {
//         remainder = remainder - num2
//       }
//       return remainder
//     } else if (num1 === num2) {
//       return 0
//     } else {
//       return num1
//     }
//   }
//   // console.log(remainder)

// }

// console.log(modulo(99, 4))

// function isIsogram(str) {
//   // TODO: 여기에 코드를 작성합니다.
//   let count = 0
//   if (str.length === 0) {
//     return true
//   } else {
//     let lowerStr = str.toLowerCase()
//     for (let i = 0; i < lowerStr.length; i++) {
//       for (let n = 0; n < lowerStr.length; n++) {
//         // console.log(lowerStr[i],lowerStr[n])
//         if (lowerStr[i] === lowerStr[n]) {
//           count += 1
//         }
//       }
//     }
//     console.log(count)
//     if (count > str.length) {
//       return false
//     } else {
//       return true
//     }
//   }
// }

// console.log(isIsogram('iCanDo'))

// function computeSquareRoot(num) {
//   let approx = 1;

//   while (approx ** 2 !== num) {
//     if ( Number((approx*approx).toFixed(2)) === num) {
//       break;
//     }
//     approx = (approx + (num / approx)) / 2;
//   } 

//   return Number(approx.toFixed(2));
// }


// console.log(isNaN(Number(' ')))
// console.log(Number('1'))

// function numberSearch(str) {
//   // TODO: 여기에 코드를 작성합니다.
//   let strLen = 0
//   let sum = 0
//   if (str.length === 0) {
//     return 0
//   } else {

//     for (let i = 0; i < str.length; i++) {
//       if (!isNaN(Number(str[i]))) {
//         console.log(str[i], sum)
//         // console.log(sum)
//         sum = sum + Number(str[i])
//       }else{
//         strLen += 1
//       }
//     }
//     console.log(strLen, sum)
//     console.log(sum/strLen)
//     return Math.round(sum / strLen)
//   }
// }

// // console.log(numberSearch("Sou2bgPJkS7Lp5r2j6jeWOts8X"))
// console.log(numberSearch('8ad'))

// function decryptCaesarCipher(str, secret) {
//   // TODO: 여기에 코드를 작성합니다.
//   // for문 > str을 하나하나 끊어서 빈 배열에 push
//   // 아스키코드로 숫자화해서 다른 빈배열에 push
//   // 숫자화 할때 secret이 26을 넘을땐 나머지만 사용하고, 아니면 secret을 그대로 사용
//   // 숫자에서 secret을 빼주고 26을 더하고

//   // 아스키 코드 범주 밖으로 나갈경우 26을 더해준다.
//   let strArr = []
//   let ASCArr = []
//   let transASCArr = []
//   secret = secret % 26
//   for (let i = 0; i < str.length; i++) {
//     strArr.push(str[i].toLowerCase())
//   }
//   for (let i = 0; i < strArr.length; i++) {
//     ASCArr.push(strArr[i].charCodeAt(0))
//   }
//   for (let i = 0; i < ASCArr.length; i++) {
//     let transCode
//     if (ASCArr[i] !== 32) {
//       transCode = ASCArr[i] - secret
//     }else{
//       transCode = ASCArr[i]
//     }
//     transASCArr.push(transCode)
//   }
//   for (let i = 0 ; i < transASCArr.length ; i++){
//     if(transASCArr[i] < 97 && transASCArr[i] !== 32){
//       transASCArr[i] += 26
//     }
//     transASCArr[i] = String.fromCharCode(transASCArr[i])
//   }
//   return transASCArr.join('')
// }

// decryptCaesarCipher('nzop delepd dfaazced jzf', 11)

  // function compressString(str) {
  //   // TODO: 여기에 코드를 작성합니다.
  //   function makeAccCountArr(string) {
  //     let count = 0
  //     let accCount = 0
  //     let accCountArr = []
  //     for (let i = 0; i < string.length; i++) {
  //       if (string[i] === string[i + 1]) {
  //         count = 1
  //         accCount += count
  //       } else {
  //         count = 0
  //         accCount = 0
  //       }
  //       accCountArr.push(accCount)
  //     }
  //     return accCountArr
  //   }
  //   if (str.length === 0) {
  //     return ''
  //   } else {
  //     accCountArr = makeAccCountArr(str)
  //     let convertStr = []
  //     for (let i = 0; i < accCountArr.length; i++) {
  //       if (accCountArr[i] >= 2 && accCountArr[i + 1] !== accCountArr[i] + 1) {
  //         let foreWord = str.substr(0, i - accCountArr[i] + 1)
  //         let doubleWord = str[i + 1]
  //         let backWord = str.substr(i + 2, str.length)
  //         convertStr.push(foreWord + (accCountArr[i] + 1) + doubleWord)
  //         str = backWord
  //         accCountArr = makeAccCountArr(backWord)
  //         console.log(str)
  //         console.log(accCountArr)
  //       }
  //     } 
  //     // console.log(str)
  //     console.log(convertStr)
  //     return str
  //   }
  // }


// compressString('dsafdasfffffsgaaaaabbbscccdd')

// // 'w w w g g o p p o p p p p'
// //  1 1 0 1 0 0 1 0 0 1 1 1    카운트 +해야될곳
// //    2   1     1         3    누적 카운트
// //  1 2 0 1 0 0 1 0 0 1 2 3    현재 카운트

// 'dsafdasfffffsgaaaaabbbscccdd' 일때
// accCountArr는
// '000000012340001234012001200' 이고
// f를 판별해 줄어들면

// 'dsafdas' + 5(중복된숫자) + f(중복된문자) + 'sgaaaaabbbscccdd'변하고

// '0000000' +                                + '001234012001200'

// function compressString(str) {
//   let result = '';
//   let n = str[0];
//   if(str===''){
//     return '';
//   }
//   for (let i = 1; i < str.length; i++) {
//     if (str[i-1] === str[i]) {
//       n = n + str[i];
//       // console.log(result,i)
//       // console.log(n,i)
//     }else{ //이번 글자가 저번 글자랑 다른 경우 a s d
//       if(n.length>=3){
//         result = result + n.length + n[0];
//         n = str[i]
//       }else if(n.length===2){
//         result = result + n[0]+n[1];
//         n = str[i];
//         // console.log(result)
//       }else { //if(n.length===1)
//         result = result + n[0];
//         // console.log(result,n)
//         n = str[i];
//       }
//       // n = str[i]
//     }
//   }
//   if(n.length>=3){
//     result = result + n.length + n[0];
//     console.log(result)
//   }
//   else {
//     result = result + n;
//     console.log(result)
//   }
//   // console.log(n.length)
//   // console.log(result)
//   return result;
// }