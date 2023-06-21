function subsequence(nums){
    let numCounts = new Map();
  let maxLength = 0;

  // Count the occurrences of each number in the array
  for (let num of nums) {
    numCounts.set(num, (numCounts.get(num) || 0) + 1);
  }

  // Iterate through the unique numbers in the array
  for (let [num, count] of numCounts) {
    // Check if the current number and the next number form a harmonious subsequence
    if (numCounts.has(num + 1)) {
      maxLength = Math.max(maxLength, count + numCounts.get(num + 1));
    }
  }

  return maxLength;
       
}

let nums= [1,3,2,2,5,2,3,7];

let result=subsequence(nums);
console.log(result);