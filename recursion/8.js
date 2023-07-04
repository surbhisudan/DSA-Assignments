function canSwapStrings(s, goal) {
    if (s === goal) {
      // Base case: the strings are already equal
      return true;
    }
  
    if (s.length !== goal.length || s.length < 2) {
      // Base case: strings have different lengths or are too short to swap
      return false;
    }
  
    for (let i = 0; i < s.length - 1; i++) {
      for (let j = i + 1; j < s.length; j++) {
        if (s[i] !== goal[i] && s[j] !== goal[j] && s[i] === goal[j] && s[j] === goal[i]) {
          // Swap characters at indices i and j
          const newS = swapCharacters(s, i, j);
  
          if (newS === goal) {
            return true;
          }
  
          // Recursively check if the swapped string can be transformed into the goal string
          if (canSwapStrings(newS, goal)) {
            return true;
          }
        }
      }
    }
  
    return false;
  }
  
  function swapCharacters(s, i, j) {
    const arr = s.split('');
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr.join('');
  }
  
  const s = "ab";
  const goal = "ba";
  console.log(canSwapStrings(s, goal)); 
  