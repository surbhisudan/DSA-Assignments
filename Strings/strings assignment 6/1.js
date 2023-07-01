function findPermutation(s) {
    const n = s.length;
    const perm = new Array(n + 1);
    let start = 0;
    let end = 0;
  
    for (let i = 0; i <= n; i++) {
      if (i === n || s[i] === 'I') {
        // Reverse the subarray if the character is 'I'
        for (let j = end; j >= start; j--) {
          perm[j] = start++;
        }
      } else {
        end = i + 1;
      }
    }
  
    return perm;
  }
  let s="IDID";
  console.log(findPermutation(s))