const rotateMatrix = function (matrix) {
  // TODO: 여기에 코드를 작성합니다.
   matrix = matrix.reverse();
    
    for(let i = 0; i < matrix.length; i++){
        for(let j = i; j < matrix.length; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        } 
        console.log(matrix)
    }
    return matrix;
};
