const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length <= 1) return arr
  let arrCount = 0
  let changeCount = 0
  while (arrCount <= arr.length) {
    // console.log(arr, arrCount, arr.length, changeCount)
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let front = arr[i]
        let back = arr[i + 1]
        arr[i] = back
        arr[i + 1] = front
        changeCount++
        // i = 0
      }
    }
    arrCount++
    if (changeCount === 0) {
      break
    }
  }
  return arr
};

let output = bubbleSort( [1, 2, 43, 100, 100, 21]);
console.log(output); // --> [1, 2, 3]
