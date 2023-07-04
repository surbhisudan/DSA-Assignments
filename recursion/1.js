function minimumDeleteSum(s1, s2) {
    const m = s1.length;
    const n = s2.length;
  
    // Create a 2D array to store the lengths of LCS
    const dp = Array(m + 1)
      .fill(0)
      .map(() => Array(n + 1).fill(0));
  
    // Fill the dp array
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + s1.charCodeAt(i - 1);
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
  
    const lcsSum = dp[m][n];
    const totalAsciiSum = s1
      .split("")
      .map((char) => char.charCodeAt(0))
      .reduce((acc, curr) => acc + curr, 0) +
      s2
        .split("")
        .map((char) => char.charCodeAt(0))
        .reduce((acc, curr) => acc + curr, 0);
  
    return totalAsciiSum - 2 * lcsSum;
  }
  
  // Example usage:
  const s1 = "sea";
  const s2 = "eat";
  const lowestAsciiSum = minimumDeleteSum(s1, s2);
  console.log(lowestAsciiSum);
  