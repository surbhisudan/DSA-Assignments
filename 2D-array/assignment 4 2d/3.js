function transposematrix(matrix){

    const rows = matrix.length;
  const cols = matrix[0].length;

  const result = new Array(cols);
  for (let i = 0; i < cols; i++) {
    result[i] = new Array(rows);
    for (let j = 0; j < rows; j++) {
      result[i][j] = matrix[j][i];
    }
  }
  return result;


}


let matrix= [[1,2,3],[4,5,6],[7,8,9]];
console.log(transposematrix(matrix));