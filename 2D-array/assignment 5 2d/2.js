function countCompleteRows(n) {
    let left = 0;
    let right = n;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const coinsNeeded = (mid * (mid + 1)) / 2;
  
      if (coinsNeeded === n) {
        // Found exact number of coins needed for complete rows
        return mid;
      } else if (coinsNeeded < n) {
        // More coins needed, check the right half
        left = mid + 1;
      } else {
        // Exceeded the number of coins needed, check the left half
        right = mid - 1;
      }
    }
  
    // The number of complete rows will be the right pointer value
    return right;
  }
  
  // Example usage
  const n = 5;
  const completeRows = countCompleteRows(n);
  console.log("Number of complete rows:", completeRows);
  