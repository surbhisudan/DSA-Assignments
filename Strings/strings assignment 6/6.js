function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return [];
    }
  
    const frequencyMap = new Map();
  
    // Count the frequency of each number in the changed array
    for (const num of changed) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
  
    const original = [];
  
    // Sort the array in ascending order
    changed.sort((a, b) => a - b);
  
    for (const num of changed) {
      if (frequencyMap.get(num) === 0) {
        continue;
      }
  
      const twiceValue = num * 2;
  
      if (frequencyMap.get(twiceValue) === undefined || frequencyMap.get(twiceValue) === 0) {
        return [];
      }
  
      // Append num to the original array
      original.push(num);
  
      // Decrement the frequencies of num and twiceValue in the map
      frequencyMap.set(num, frequencyMap.get(num) - 1);
      frequencyMap.set(twiceValue, frequencyMap.get(twiceValue) - 1);
    }
  
    return original;
  }
  
  let changed = [1,3,4,2,6,8];
  console.log(findOriginalArray(changed));