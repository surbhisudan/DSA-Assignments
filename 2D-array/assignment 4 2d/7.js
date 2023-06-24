function maxCount(m, n, ops) {
    if (ops.length === 0) {
      return m * n; // If no operations are given, all cells will have the same maximum count
    }
  
    let minX = m;
    let minY = n;
  
    // Find the minimum values of ai and bi
    for (const [ai, bi] of ops) {
      minX = Math.min(minX, ai);
      minY = Math.min(minY, bi);
    }
  
    return minX * minY;
  }
  
  // Example usage
  const m = 3;
  const n = 3;
  const ops = [[2, 2], [3, 3]];
  
  const result = maxCount(m, n, ops);
  console.log(result); // Output: 4
  