function multiplySparseMatrices(mat1, mat2) {
    const m = mat1.length; // Number of rows in mat1
    const k = mat1[0].length; // Number of columns in mat1
    const n = mat2[0].length; // Number of columns in mat2
  
    const result = new Array(m);
  
    // Initialize the result matrix with zeros
    for (let i = 0; i < m; i++) {
      result[i] = new Array(n).fill(0);
    }
  
    // Transpose mat2 for efficient column access
    const transposedMat2 = transposeMatrix(mat2);
  
    // Perform matrix multiplication
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let x = 0; x < k; x++) {
          if (mat1[i][x] !== 0 && transposedMat2[j][x] !== 0) {
            result[i][j] += mat1[i][x] * transposedMat2[j][x];
          }
        }
      }
    }
  
    return result;
  }
  
  // Helper function to transpose a matrix
  function transposeMatrix(matrix) {
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
  let mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]];
  console.log(multiplySparseMatrices(mat1,mat2));