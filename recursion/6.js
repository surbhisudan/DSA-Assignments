function findAnagrams(s, p) {
    const result = [];
    const pCount = new Array(26).fill(0);
    const windowCount = new Array(26).fill(0);
    const aCharCode = 'a'.charCodeAt(0);
  
    // Count the frequencies of characters in string p
    for (let i = 0; i < p.length; i++) {
      pCount[p.charCodeAt(i) - aCharCode]++;
    }
  
    let left = 0;
    let right = 0;
  
    // Slide the window through string s
    while (right < s.length) {
      const rightChar = s.charCodeAt(right) - aCharCode;
      windowCount[rightChar]++;
  
      // Shrink the window if it exceeds the length of p
      if (right - left + 1 > p.length) {
        const leftChar = s.charCodeAt(left) - aCharCode;
        windowCount[leftChar]--;
        left++;
      }
  
      // Check if the current window is an anagram of p
      if (right - left + 1 === p.length && isAnagram(pCount, windowCount)) {
        result.push(left);
      }
  
      right++;
    }
  
    return result;
  }
  
  function isAnagram(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  const s = "cbaebabacd";
  const p = "abc";
  console.log(findAnagrams(s, p));  // Output: [0, 6]
  