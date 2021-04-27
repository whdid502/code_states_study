const rockPaperScissors = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  // 객체를 만들어서 가중치를 value값으로 담아주자
  // rock : 3, paper : 2, sissor : 1
  // rock이 나오고 가중치가 높은순부터순회
  // 이미 존재하는지 체크를 어떻게?

  //전체 결과를 담을 배열을 선언해주고
  // i번째가 rock이 나오면 i+1번째는 rock,paper,sissor순서로 나와야됨
  // 위를 재귀
  // 이중포문 써보자
  // 재귀르 ㄹ쓰자
  n = n || 3
  let result = [];
  // let cases = [];
  let RPC = ['rock', 'paper', 'sissor']
  let makeCase = function (round, cases) {
    console.log('----')
    console.log('현재 담긴 케이스 : ', cases)
    if (round === 0) {
      result.push(cases)
      return
    }
    for (let i = 0; i < RPC.length; i++) {
      let cur = RPC[i]
      console.log('현재 담겨야될 가위바위보 와 그 순서 와 인덱스: ', cur, i)
      makeCase(round - 1, cases.concat(cur))
      console.log('재귀끝')

    }
    //   cases.push(first)
    //   for(let i = 0 ; i < RPC.length ; i++){
    //     if(cases[0] === first)
    //   }
    // }
    // for(let key of RPC){
    //   makeCase(key,n)
  }
  makeCase(n,[])
  return result
};

console.log(rockPaperScissors(3))
// rockPaperScissors(3)
