function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);
    let maxSum = 0;
    
    for (let i = 0; i < nums.length; i += 2) {
      maxSum += Math.min(nums[i], nums[i + 1]);
    }
    
    return maxSum;
  }
  
  // Example usage:
  const nums = [1, 4, 3, 2];
  console.log(arrayPairSum(nums)); // Output: 4
  