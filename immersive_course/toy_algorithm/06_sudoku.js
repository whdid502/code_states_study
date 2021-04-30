const sudoku = function (board) {
  // TODO: 여기에 코드를 작성합니다.
  // 0자리에 후보군을 만든다
  // 0자리에 후보군배열이 들어간 보드판을 루프돌며 
  // 같은 행과 열의 배열들을 비교하며 겹치지 않는 값을 다시 후보군으로 재선정
  // 배열의 길이가 1이라면 해당 값을 리턴
  // 위 과정을 반복

  for(let i = 0 ; i < board.length ; i ++){
    let existLineNumb = []
    board[i].forEach((el) => {
      if(el !== 0){
        existLineNumb.push(el)
      }
    })
    // console.log(existLineNumb)
    for(let j = 0 ; j < board[i].length ; j++){
      if(board[i][j] === 0){
        let existRowNumb = []
        for(let n = 0 ; n < 9 ; n++){
          if(board[n][j] !== 0){
            existRowNumb.push(board[n][j])
          }
        }
        // console.log(board[i][j],i,j,existLineNumb, existRowNumb)
        let possibleNum = existLineNumb.concat(existRowNumb)
        let uniquePossibleNum = possibleNum.filter((item,pos) => possibleNum.indexOf(item) === pos)
        // console.log(uniquePossibleNum)
        board[i][j] = uniquePossibleNum
      }
    }
    console.log(board)
  }

  let findSudoku = function(board){
    let arrCount = 0
    for(let key of board){
      for(let i = 0 ; i < key.length; i++){
        if(Array.isArray(key[i])){
          arrCount++
        }
      }
    }
    if(arrCount === 0){
      return
    }
  


  }

};

let board = [
  [0, 3, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0],
];
let output = sudoku(board);
console.log(output); // -->
/* 
[
  [4, 3, 5, 2, 6, 9, 7, 8, 1],
  [6, 8, 2, 5, 7, 1, 4, 9, 3],
  [1, 9, 7, 8, 3, 4, 5, 6, 2],
  [8, 2, 6, 1, 9, 5, 3, 4, 7],
  [3, 7, 4, 6, 8, 2, 9, 1, 5],
  [9, 5, 1, 7, 4, 3, 6, 2, 8],
  [5, 1, 9, 3, 2, 6, 8, 7, 4],
  [2, 4, 8, 9, 5, 7, 1, 3, 6],
  [7, 6, 3, 4, 1, 8, 2, 5, 9],
];
 */