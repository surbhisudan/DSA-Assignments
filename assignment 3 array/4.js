function findIndex(nums,target){

    let s=0;
    let e=nums.length-1;
    while(s<=e){
        const mid=Math.floor((s+e)/2);
        if(nums[mid]==target){
            return mid;
        }
        if(nums[mid]<target){
            s=mid+1;
        }else{
            e=mid-1
        }
        return s;
    }
  
}

let nums=[1,3,5,6],target=3;
console.log(findIndex(nums,target));