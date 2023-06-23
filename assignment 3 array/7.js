
function findMissingRanges(nums, lower, upper) {
    const result = [];
    let start = lower;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > start) {
        result.push(getRange(start, nums[i] - 1));
        start = nums[i] + 1;
      }
    }
  
    if (start <= upper) {
      result.push(getRange(start, upper));
    }
  
    return result;
  }
  
  function getRange(start, end) {
    return start === end ? [start] : [start, end];
  }
  
  const nums = [0, 1, 3, 50, 75];
  const lower = 0;
  const upper = 99;
  
  const result = findMissingRanges(nums, lower, upper);
  console.log(result);
  