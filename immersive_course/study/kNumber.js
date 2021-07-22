function solution(array, commands) {
  var answer = [];
  for(let key of commands){
    let sliceArray = array.slice(key[0]-1,key[1])
    sliceArray.sort((a,b) => a-b)
    let indexNumber = sliceArray[key[2]-1]
    answer.push(indexNumber)
  }
  return answer;
}

let result = solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])

console.log(result)