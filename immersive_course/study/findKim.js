function solution(seoul) {
  let kimIndex = seoul.indexOf('Kim')
  var answer = `김서방은 ${kimIndex}에 있다`;
  return answer;
}

let result = solution(["Jane", "Kim"])

console.log(result)