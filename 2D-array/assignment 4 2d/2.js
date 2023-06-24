function distinctIntegers(nums1,nums2){

    let set1=new Set(nums1);
    let set2=new Set(nums2);

    let result1=[]
    let result2=[];
    for (const num of set1) {
        if (!set2.has(num)) {
          result1.push(num);
        }
      }
    
      for (const num of set2) {
        if (!set1.has(num)) {
          result2.push(num);
        }
    }

    return [result1,result2]
}

let nums1 = [1,2,3], nums2 = [2,4,6];

console.log(distinctIntegers(nums1,nums2))