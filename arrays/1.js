// 💡 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order
// **Example:**
// Input: nums = [2,7,11,15], target = 9
// Output0 [0,1]
// **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1]

// function indices(nums ,target){
//     let array=[]

//     for(let i=0;i<nums.length;i++){
//         let res=target-nums[i];
//         if
           
//         }

    
//     return array;

// }


// let nums=[2,7,11,15];
// let target = 9;

// let result=indices(nums,target);
// console.log(result)
function indices(nums, target) {
    const obj = {};
    
  
    for (let i = 0; i < nums.length; i++) {
    //   const currentNum = nums[i];
      const secondnum = target - nums[i];
  
      if (obj.hasOwnProperty(secondnum)) {
        
        return [obj[secondnum], i];
      }
  
      obj[nums[i]] = i;
    }
  
    return [];
  }
  
  let nums = [2,7, 11, 15];
  let target = 9;
  
  let result = indices(nums, target);
  console.log(result);
  




