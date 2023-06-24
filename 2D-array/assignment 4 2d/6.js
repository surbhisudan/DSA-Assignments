function sortedSquares(nums) {
    const result = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    let i = nums.length - 1;
  
    while (left <= right) {
      const leftSquare = nums[left] * nums[left];
      const rightSquare = nums[right] * nums[right];
  
      if (leftSquare > rightSquare) {
        result[i] = leftSquare;
        left++;
      } else {
        result[i] = rightSquare;
        right--;
      }
      i--;
    }
  
    return result;
  }
  
  const nums = [-4, -1, 0, 3, 10];
  const sortedSquaresArray = sortedSquares(nums);
  console.log(sortedSquaresArray);
  