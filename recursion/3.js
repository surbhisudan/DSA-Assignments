function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
  
    // Create a 2D array to store the lengths of LCS
    const dp = Array(m + 1)
      .fill(0)
      .map(() => Array(n + 1).fill(0));
  
    // Fill the dp array
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
  
    const lcsLength = dp[m][n];
    const minDeletions = m + n - 2 * lcsLength;
  
    return minDeletions;
  }
  
  // Example usage:
  const word1 = "sea";
  const word2 = "eat";
  const steps = minDistance(word1, word2);
  console.log(steps);
  