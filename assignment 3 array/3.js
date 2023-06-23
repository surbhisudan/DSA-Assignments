function nextPermutation(nums) {
    // Find the first element from the right that is smaller than its next element
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
  
    // If no such element is found, reverse the entire array
    if (i === -1) {
      reverse(nums, 0, nums.length - 1);
      return nums;
    }
  
    // Find the first element from the right that is greater than the element at index i
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
  
    // Swap the elements at indices i and j
    swap(nums, i, j);
  
    // Reverse the elements after index i
    reverse(nums, i + 1, nums.length - 1);
  
    return nums;
  }
  
  function reverse(nums, start, end) {
    while (start < end) {
      swap(nums, start, end);
      start++;
      end--;
    }
  }
  
  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  let nums=[1,2,3];
  console.log(nextPermutation(nums));