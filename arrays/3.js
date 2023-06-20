
// 💡 Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// **Example 1:**
// Input: nums = [1,3,5,6], target = 5

// Output: 2


function findIndex(nums,target){
     let left=0;
     let right=nums.length;
     while(left<right){

    
     let mid=Math.floor((left+right)/2);

     if (nums[mid]<target){
        left=mid+1
     }
     else{
        right=mid;
     }
     }
     return left;
 }



let nums = [1,3,5,6];
let target = 5;

let result=findIndex(nums,target);
console.log(result);


