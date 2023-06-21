function isMonotonic(nums) {
    const n = nums.length;
    let increasing = true;
    let decreasing = true;
  
    for (let i = 0; i < n - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        increasing = false;
      }
      if (nums[i] < nums[i + 1]) {
        decreasing = false;
      }
    }
  
    return increasing || decreasing;
  }
  
  const nums = [1, 2, 2, 3];
  const isMonotonicArray = isMonotonic(nums);
  console.log(isMonotonicArray);
  