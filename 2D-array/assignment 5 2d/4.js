function findMissingDistinct(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const diff1 = [];
    const diff2 = [];
  
    for (const num of set1) {
      if (!set2.has(num)) {
        diff1.push(num);
      }
    }
  
    for (const num of set2) {
      if (!set1.has(num)) {
        diff2.push(num);
      }
    }
  
    return [diff1, diff2];
  }
  const nums1 = [1, 2, 3];
  const nums2 = [2,4,6];
  
  const answer = findMissingDistinct(nums1, nums2);
 console.log(answer)
    