function fibonacci(n) {
  // TODO: 여기에 코드를 작성합니다.
  let arr = [0, 1];

  const recursion = (count = 2) => {
    arr.push(arr[count-2] + arr[count-1]);
    if(count === n) {
      return;
    }
    recursion(count + 1);
  }
  if(n === 0) {
    return 0;
  }
  else if(n === 1) {
    return 1;
  }
  else {
    recursion();
    return arr[n];
  }
}

console.log(fibonacci(9))