function increamentByOne(nums){

    for(let i=nums.length-1;i>=0;i--){
        nums[i]+=1;
    if(nums[i]<10){
        return nums;
    }else{
        nums[i]=0;
        
    }
    }
    const newnum=[1,...nums];
    return newnum;
    
}

let nums=[1,2,3];

console.log(increamentByOne(nums))

