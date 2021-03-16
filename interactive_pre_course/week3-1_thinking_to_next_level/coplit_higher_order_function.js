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

