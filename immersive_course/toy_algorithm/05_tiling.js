let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.

  const arr = [];
  arr.push(0, 1, 2);
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] ;
  }
  return arr[n];
};

// const solution = (n) => {
//   const arr = [];
//   arr.push(0, 1, 2);
//   for (let i = 3; i <= n; i++) {
//     arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007;
//   }
//   return arr[n];
// };

// const arr = [];
// arr.push(0, 1, 2);
// for (let i = 3; i <= n; i++) {
//   arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007;
// }
// return arr[n];
let output = tiling(2);
console.log(output); // --> 2

output = tiling(4);
console.log(output); // --> 5