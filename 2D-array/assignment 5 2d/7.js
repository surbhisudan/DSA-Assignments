function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
  
      if (nums[mid] > nums[right]) {
        // Minimum element is in the right half
        left = mid + 1;
      } else {
        // Minimum element is in the left half or is the current element
        right = mid;
      }
    }
  
    // left or right will point to the minimum element
    return nums[left];
  }

  

  let nums=[3,4,5,1,2];
  console.log(findMin(nums));