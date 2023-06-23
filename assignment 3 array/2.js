function fourSum(nums, target) {
    const result = [];
    const n = nums.length;
  
    if (n < 4) {
      return result;
    }
  
    nums.sort((a, b) => a - b);
  
    for (let i = 0; i < n - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
  
      if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
        break; // The sum is too large, no need to continue
      }
  
      if (nums[i] + nums[n - 1] + nums[n - 2] + nums[n - 3] < target) {
        continue; // The sum is too small, skip to the next iteration
      }
  
      for (let j = i + 1; j < n - 2; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) {
          continue;
        }
  
        if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
          break; // The sum is too large, no need to continue
        }
  
        if (nums[i] + nums[j] + nums[n - 1] + nums[n - 2] < target) {
          continue; // The sum is too small, skip to the next iteration
        }
  
        let left = j + 1;
        let right = n - 1;
  
        while (left < right) {
          const sum = nums[i] + nums[j] + nums[left] + nums[right];
  
          if (sum === target) {
            result.push([nums[i], nums[j], nums[left], nums[right]]);
  
            while (left < right && nums[left] === nums[left + 1]) {
              left++;
            }
  
            while (left < right && nums[right] === nums[right - 1]) {
              right--;
            }
  
            left++;
            right--;
          } else if (sum < target) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
  
    return result;
  }
  
  let nums = [1,0,-1,0,-2,2], target = 0;
  console.log(fourSum(nums, target))