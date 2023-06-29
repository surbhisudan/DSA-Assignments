function convertTo2D(original, m, n) {
    const len = original.length;
    if (len !== m * n) {
      return [];
    }
  
    const result = Array.from({ length: m }, () => Array(n));
  
    for (let i = 0; i < len; i++) {
      const row = Math.floor(i / n);
      const col = i % n;
      result[row][col] = original[i];
    }
  
    return result;
  }
  
  let original = [1,2,3,4], m = 2, n = 2;
  console.log(convertTo2D(original,m,n))