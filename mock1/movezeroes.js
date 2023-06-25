function moveZeroes(nums){
    let left=0;
    let right=0;

    while(right<nums.length){
       if(nums[right]!=0){
           [nums[right],nums[left]]=[nums[left],nums[right]];
           left++
       }
       right++
    }
    return nums

}

let nums=[0,1,0,3,12];
console.log(moveZeroes(nums))