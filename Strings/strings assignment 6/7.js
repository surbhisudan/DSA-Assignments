function generateMatrix(n) {
    const matrix = new Array(n);
  
    // Initialize the matrix with empty arrays
    for (let i = 0; i < n; i++) {
      matrix[i] = new Array(n);
    }
  
    let num = 1; // Current number to fill in the matrix
    let top = 0; // Top row index
    let bottom = n - 1; // Bottom row index
    let left = 0; // Left column index
    let right = n - 1; // Right column index
  
    while (num <= n * n) {
      // Fill the top row from left to right
      for (let i = left; i <= right; i++) {
        matrix[top][i] = num++;
      }
      top++;
  
      // Fill the right column from top to bottom
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = num++;
      }
      right--;
  
      // Fill the bottom row from right to left
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num++;
      }
      bottom--;
  
      // Fill the left column from bottom to top
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  
    return matrix;
  }
  
  let n=3;
  console.log(generateMatrix(n))