  const quickSort = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length < 2)
      return arr;

    let pivot = arr[Math.floor(arr.length / 2)];
    let middle = arr.filter(function (data) { return data == pivot; });
    let lows = quickSort(arr.filter(function (data) { return data < pivot; }));
    let highs = quickSort(arr.filter(function (data) { return data > pivot; }));

    return lows.concat(middle).concat(highs);
  };


let output = quickSort([20, -10, -11, 2, 29]);
console.log(output); // --> [1, 3, 21]