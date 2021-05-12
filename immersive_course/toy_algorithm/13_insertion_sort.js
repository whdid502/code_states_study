const insertionSort = function (arr, callback) {
  // TODO: 여기에 코드를 작성합니다.
  if (callback !== undefined) {
    let callbackObj = {}
    arr.map((el) =>
      callbackObj[callback(el)] = el
    )
    console.log(callbackObj)
    let returnObj = Object.keys(callbackObj)
    let baseObj = Object.values(callbackObj)
    for (let i = 0; i < returnObj.length; i++) {
      idx = i;
      while (returnObj[idx] !== undefined && returnObj[idx - 1] > returnObj[idx]) {
        let temp = returnObj[idx - 1];
        arr[idx - 1] = arr[idx];
        arr[idx] = temp;
        idx--;
      }
    }
  }


  else {
  for (let i = 0; i < arr.length; i++) {
    idx = i;
    while (arr[idx] !== undefined && arr[idx - 1] > arr[idx]) {
      let temp = arr[idx - 1];
      arr[idx - 1] = arr[idx];
      arr[idx] = temp;
      idx--;
    }
  }
}
console.log(arr)
return arr
};


function mutliply(n) {
  return n * n
}

let output = insertionSort([-10, -11, 2, 29], mutliply);
console.log(output); // --> [1, 3, 21]