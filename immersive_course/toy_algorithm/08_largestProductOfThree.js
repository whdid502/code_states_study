const largestProductOfThree = function (arr) {
  let head = 0
  let tail = 0

  arr.sort((a, b) => a - b)

  head = arr[0] * arr[1] * arr[arr.length - 1]; 
  tail = arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3]; 

  if (head > tail) {
    return head;
  } else {
    return tail;
  }

};

let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)