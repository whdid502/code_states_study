const primePassword = (curPwd, newPwd) => {
  // TODO: 여기에 코드를 작성합니다.
  function isPrime(num) {
    if (num % 2 === 0) return false;
    let sqrt = parseInt(Math.sqrt(num));
    for (let divider = 3; divider <= sqrt; divider += 2) {
      if (num % divider === 0) {
        return false;
      }
    }
    return true;
  };
  function splitNum(num) {
    const digits = num.toString().split('');
    return digits.map((d) => Number(d));
  };
  function joinNum(arr) {
    return Number(arr.join(''))
  }
  if (curPwd === newPwd) {
    return 0
  }
  let front = 0
  let rear = 0
  let queue = []
  function isEmpty(queue) {
    return front === rear
  }
  function enQueue(queue, item) {
    queue.push(item)
    rear++
  }
  function deQueue(queue) {
    return queue[front++]
  }
  const isVisitied = Array(10000).fill(false)
  isVisitied[curPwd] = true
  enQueue(queue, [0, curPwd])
  while (isEmpty(queue) === false) {
    const [step, num] = deQueue(queue)
    for (let i = 0; i < 4; i++) {
      const digits = splitNum(num)
      for (let d = 0; d < 10; d++) {
        if (d !== digits[i]) {
          digits[i] = d
          const next = joinNum(digits)
          if (next === newPwd) return step + 1
          if (next > 1000 && isPrime(next) && isVisitied[next] === false) {
            isVisitied[next] = true
            enQueue(queue, [step + 1, next])
          }
        }
      }
    }
  }
  return -1
};

// let output = primePassword(1033, 1033);
// console.log(output); // --> 0

output = primePassword(3733, 8779);
console.log(output); // --> 3 (3733 -> 3739 -> 3779 -> 8779)  

