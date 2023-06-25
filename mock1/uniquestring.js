function uniqueString(s){
    let count=new Map();
    for(let i=0;i<s.length;i++){
        if (count.has(s[i])) {
            count.set(s[i], count.get(s[i]) + 1);
          } else {
            count.set(s[i], 1);
          }
        }
      
        for (let i = 0; i < s.length; i++) {
          if (count.get(s[i]) === 1) {
            return i;
          }
    }
      
        return -1;
 }

 let s="leetcode";
 console.log(uniqueString(s));