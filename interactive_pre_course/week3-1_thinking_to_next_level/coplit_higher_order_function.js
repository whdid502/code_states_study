// function returnFunction() {
//   // TODO: 여기에 코드를 작성합니다.
//   return function(){
//     return 'Hello HoF!'
//   }
// }

// const double = function (num){
//   return num*2
// }

// function functionParameter(func, num) {
//   // TODO: 여기에 코드를 작성합니다.
//   return func(num)
// }

// const double = function(num){
//   return num*2
// }

// function applyTwice(func, num) {
//   // TODO: 여기에 코드를 작성합니다.
//   let fir_output = func(num)
//   return func(fir_output)
// }


// let output = applyTwice(double , 2)
// console.log(output)

// const double = function(num){
//   return num*2
// }

// const add10 = function(num){
//   return num + 10
// }


// function compose(func1, func2, num) {
//   // TODO: 여기에 코드를 작성합니다.
//   const first_apply = func2(num)
//   return func1(first_apply)
// }

// function compose2(func1, func2) {
//   // TODO: 여기에 코드를 작성합니다.
//   return function(num){
//     const first_apply = func2(num)
//     return func1(first_apply)
//   }
// }

// function square(num) {
//   return num * num;
// }

// function add5(num) {
//   return num + 5;
// }

// function mul3(num) {
//   return num * 3;
// }

// function isOdd(num) {
//   return num % 2 !== 0;
// }


// function pipe(...func) {
//   // TODO: 여기에 코드를 작성합니다.
//   let output
//   return function(num){

//     for (const key of func){
//       output = key(num)
//       num = output
//       console.log(output)
//     }
//     return output
//   }

// }

// // console.log(pipe(square, add5))
// let output = pipe(add5, square)
// console.log(output(4))

// function callbackOnly(callback, response) {
//   // TODO: 여기에 코드를 작성합니다.
//   if (response['status'] === 'success'){
//     return callback(response['data'])
//   }else if(response['status'] === 'fail'){
//     return 'Something went wrong!'
//   }
// }

// function mapCallback(func, arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   let output = []
//   if(arr.length === 0){
//     return []
//   }else{
//     for (let i = 0 ; i < arr.length ; i++){
//       output.push(func(arr[i]))
//     }
//     return output
//   }
// }

// function filterCallback(func, arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   let output = []
//   if (arr.length === 0){
//     return []
//   }else{
//     for(let i = 0; i < arr.length ; i++){
//       if (func(arr[i])){
//         output.push(arr[i])
//       }
//     }
//     return output
//   }
// }

// function removeElement(arr, discarder) {
//   // TODO: 여기에 코드를 작성합니다.
//   return arr.filter(function(el){
//     return el !== discarder

//   })
// }

// function keep(arr, keeper) {
//   // TODO: 여기에 코드를 작성합니다.
//   return arr.filter(function(el){
//     return el === keeper
//   })
// }

// function filterOddLengthWords(words) {
//   // TODO: 여기에 코드를 작성합니다.
//   return words.filter(function(word){
//     return word.length%2 !== 0
//   })
// }

// function getIndex(arr, num) {
//   return arr.filter(function (el) {
//     return el < num;
//   }).length;
// }

// console.log(getIndex([4, 2, 5], 3))

// function lessThan100(number) {
//   return number < 100;
// }

// function getElementsLessThan100AtProperty(obj, property) {
//   // TODO: 여기에 코드를 작성합니다.
//   if(Array.isArray(obj[property])){
//     return obj[property].filter(function(el){
//       return lessThan100(el) && typeof el === 'number'
//     })
//   }else{
//     return []
//   }
// }

// // let obj = { arr: ['99', 2, true] }

// console.log(getElementsLessThan100AtProperty({ arr: ['99', 2, true] }, 'arr'))

// function getDoubledElements(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   return arr.map(function(el){
//     return el*2
//   })
// }

// function getLengthOfElements(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   return arr.map(function(el){
//     return el.length
//   })
// }

// function checkEvenOrNot(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   return arr.map(function(el){
//     if (el === 0 || el%2 !==0){
//       return 'no'
//     }else if(el%2 === 0){
//       return 'ok'
//     }
//   })
// }

// function getOnlyNames(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   return arr.map(function(el){
//     return el['name']
//   })
// }

// function getFullNames(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   return arr.map(function(el){
//     return el['firstName'] + ' ' + el['lastName']
//   })
// }

// function square(number) {
//   return number * number;
// }

// function getSquaredElementsAtProperty(obj, property) {
//   // TODO: 여기에 코드를 작성합니다.
//   if (Array.isArray(obj[property])){
//     return obj[property].map(function(el){
//       return square(el)
//     })
//   }else{
//     return []
//   }
// }

// function getOnlyAllowedToDrink(arr) {
//   arr2 = arr.filter(function(el){
//     return el['age'] >= 18
//   })
//   console.log(arr2)
//   return arr2.map(function(el){
//     return el['name']
//   })
// }

// console.log(getOnlyAllowedToDrink( [{ name: 'Harry', age: 18 }, { name: 'Ron', age: 14 }, { name: 'Hermione', age: 14 }]))

// function classicMovies(arr, year) {
//   // TODO: 여기에 코드를 작성합니다.
//   let arr2 = arr.filter(function(el){
//     return el['year'] < year
//   })
//   return arr2.map(function(el){
//     return el['title'] + ' by ' + el['director']
//   })
// }

// function computeSumOfAllElements(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   if (arr.length === 0){
//     return 0
//   }
//   var reducer = (acc, val) => acc + val
//   return arr.reduce(reducer)

// }

// function computeProductOfAllElements(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   if(arr.length === 0){
//     return 1
//   }
//   const reducer = (acc, val) => acc*val
//   return arr.reduce(reducer)

// }

// function computeAverageOfNumbers(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   if(arr.length === 0){return 0}
//   const reducer = (acc, val) => acc + val
//   let sum = arr.reduce(reducer)
//   return sum/arr.length
// }

// function calculateScore(records, value) {
//   // TODO: Your code here!
//   if (records.length === 0) { return 0 }
//   else {
//     const new_obj = records.filter(function (el) {
//       return el['animal'] === value
//     })
//     console.log(new_obj)
//     const obj_score = new_obj.map(function (el) {
//       return el['score']
//     })
//     if (obj_score.length === 0) {
//       return 0
//     } else {
//       const reducer = (acc, val) => acc + val
//       return obj_score.reduce(reducer)
//     }
//   }
// }

// const records = [
//   {
//     score: 63,
//     animal: 'dog',
//   },
//   {
//     score: 75,
//     animal: 'dog',
//   },
//   {
//     score: 87,
//     animal: 'cat',
//   },
//   {
//     score: 98,
//     animal: 'cat',
//   },
//   {
//     score: 24,
//     animal: 'dog',
//   },
// ];

// let output = calculateScore(records, 'mouse');
// console.log(output); // --> 0

// function getLongestElement(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   if (arr.length === 0) {
//     return ''
//   } else {
//   arr.sort(function (a, b) {
//     return b.length - a.length
//   })
//   return arr[0]
// }
// }
// getLongestElement(['one', 'two', 'three'])

// function joinArrayOfArrays(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   const reducer = (acc, ...val)
// }

// var arr = [10,9,8,7,6]

// var sum = arr.reduce((acc,cur,idx,arr) => { 
//   console.log('누적값',acc)
//   console.log('현재값',cur)
//   console.log('인덱스',idx)
//   // console.log(arr)
//   return pre + cur })

// console.log(sum)

// function joinArrayOfArrays(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   let result = []
//   arr.map(function (el) {
//     el.map(function (item) {
//       result.push(item)
//     })
//   })
//   return result
// }

// console.log(joinArrayOfArrays([['a','b'], [1, 3], [true, false]]))

// function joinArrayOfArrays(arr) {
//   let result = [];
//   arr.map(function (el) {
//     el.map(function (dl) {
//       result.push(dl);
//     })
//   })
//   return result
// }

// function findShortestWord(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   if (arr.length === 0) {
//     return ''
//   } else {
//     const only_str = arr.filter((el) => typeof el === 'string')
//     if (only_str.length === 0) {
//       return ''
//     } else {
//       const sorted = only_str.sort(function (a, b) {
//         return a.length - b.length
//       })
//       return sorted[0]
//     }
//   }

// }

// let studentList = [
//   {
//     name: 'Anna',
//     gender: 'female',
//     grades: [4.5, 3.5, 4],
//   },
//   {
//     name: 'Dennis',
//     gender: 'male',
//     country: 'Germany',
//     grades: [5, 1.5, 4],
//   },
//   {
//     name: 'Martha',
//     gender: 'female',
//     grades: [5, 4, 4, 3],
//   },
//   {
//     name: 'Brock',
//     gender: 'male',
//     grades: [4, 3, 2],
//   },
// ];

// function studentReports(students) {
//   // TODO: 여기에 코드를 작성합니다.
//   let female_arr = students.filter((el) => el['gender'] === 'female')
//   // console.log(female_arr)
//   female_arr.forEach(function(el){
//     console.log(el['grades'],'/br')
//     let sum = el['grades'].reduce((pre,cur) => pre + cur)
//     let average = sum/el['grades'].length
//     console.log(sum)
//     console.log(average)
//     return el['grades'] = average
//   })
//   return female_arr
// }

// let output = studentReports(studentList);

// console.log(output);

// function sumOfArraysInArray(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   let arr_1dim = []
//   arr.map(function (el) {
//     el.map(function (item) {
//       return arr_1dim.push(item)
//     })
//   })
//   let only_numb = arr_1dim.filter((el) => typeof el === 'number')
//   if (only_numb.length === 0) {
//     return 0
//   } else {
//     return only_numb.reduce((pre, cur) => pre + cur)
//   }
// }
