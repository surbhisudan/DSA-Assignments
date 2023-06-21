function minimumScore(nums, k) {
    let minNum = Math.min(...nums);
    let maxNum = Math.max(...nums);
    let initialScore = maxNum - minNum;
  
    if (k === 0) {
      return initialScore;
    }
  
    let updatedMin = minNum;
    let updatedMax = maxNum;
  
    for (let i = 0; i < nums.length; i++) {
      let potentialMin = nums[i] - k;
      let potentialMax = nums[i] + k;
      updatedMin = Math.min(updatedMin, potentialMin);
      updatedMax = Math.max(updatedMax, potentialMax);
    }
  
    return updatedMax - updatedMin;
  }
  
  // Example usage:
  const nums = [1];
  const k = 0;
  console.log(minimumScore(nums, k)); // Output: 0
  