function findthreeSum(nums,target){
    nums.sort((a,b)=>(a-b));

    let closestsum=Infinity;
    

    for(let i=0;i<nums.length-1;i++){
        let left=i+1;
        let right=nums.length-1;
        
        while(left<right){

            const currentsum=(nums[i]+nums[left]+nums[right]);

            if(currentsum==target){
                return target;
            }
            if(Math.abs(currentsum-target)<Math.abs(closestsum-target)){
                closestsum=currentsum;
            }
            if(currentsum<target){
                left++;
            } else{
                right--
            }

        }
    }
    return closestsum;
}

let nums=[-1,2,1,-4];
let target=1;
console.log(findthreeSum(nums,target))