function shuffle(nums, n) {
    const ans = [];
  
    for (let i = 0; i < n; i++) {
      ans.push(nums[i],nums[i + n]);
    }
  
    return ans;
  }


const nums = [2, 5, 1, 3, 4, 7];
const n = 3;
const ans = shuffle(nums, n);
console.log(ans);
  