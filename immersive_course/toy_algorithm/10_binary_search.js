const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  // let copiedArr = [...arr]
  // let center = arr.length%2 === 0 ? arr.length/2 : (arr.length-1)/2
  // console.log(center)
  // while(copiedArr.length > 1){
  //   if(copiedArr[center] > target){
  //     copiedArr.splice(copiedArr[center], copiedArr.length)
  //     center = copiedArr.length%2 === 0 ? copiedArr.length/2 : (copiedArr.length-1)/2
  //     console.log(copiedArr, center)
  //   }
  //   else if(copiedArr[center] < target){
  //     console.log('aa')
  //     copiedArr.splice(0,copiedArr[center])
  //     center = copiedArr.length%2 === 0 ? copiedArr.length/2 : (copiedArr.length-1)/2
  //     console.log(copiedArr, center)

  //   }
  //   else if(copiedArr[center] === target){
  //     return arr.indexOf(center)
  //   }
  // }
  // return -1
  // console.log(arr)
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    let center = Math.floor((high + low) / 2)
    let guess = arr[center]
    console.log(guess, center)
    if(guess === target){
      console.log('answer')
      return center
    }
    else if( guess > target){
      high = center - 1
    }
    else{
      low = center +1
    }
  }
  return -1
};

// let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 2);
// console.log(output); // --> 2

output = binarySearch([4, 6, 8, 9, 10, 15], 9);
console.log(output); // --> -1