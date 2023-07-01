function minProductSum(nums1, nums2) {
    const n = nums1.length;
  
    nums1.sort((a, b) => a - b); // Sort nums1 in ascending order
    nums2.sort((a, b) => b - a); // Sort nums2 in descending order
  
    let minProductSum = 0;
  
    for (let i = 0; i < n; i++) {
      minProductSum += nums1[i] * nums2[i];
    }
  
    return minProductSum;
  }
  let nums1 = [5,3,4,2], nums2 = [4,2,2,5];
  console.log(minProductSum(nums1,nums2));