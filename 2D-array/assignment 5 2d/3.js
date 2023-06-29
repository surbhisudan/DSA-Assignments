function sortedSquares(nums) {
    const result = [];
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const leftSquare = nums[left] * nums[left];
      const rightSquare = nums[right] * nums[right];
  
      if (leftSquare >= rightSquare) {
        result.unshift(leftSquare);
        left++;
      } else {
        result.unshift(rightSquare);
        right--;
      }
    }
  
    return result;
  }
  let nums = [-4,-1,0,3,10];
  console.log(sortedSquares(nums));
  