function canShift(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    const n = s.length;
    const target = goal + goal;
  
    for (let i = 0; i < n; i++) {
      if (target.slice(i, i + n) === s) {
        return true;
      }
    }
  
    return false;
  }
let s = "abcde", goal = "cdeab";
console.log(canShift(s,goal));  