function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      // If the length of 'changed' is odd, it cannot be a doubled array
      return [];
    }
  
    const frequencyMap = new Map();
  
    // Count the frequency of each element in 'changed'
    for (let num of changed) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
  
    const original = [];
  
    // Sort the unique elements in 'changed'
    const uniqueElements = Array.from(new Set(changed)).sort((a, b) => a - b);
  
    // Iterate through the unique elements in 'changed'
    for (let num of uniqueElements) {
      if (frequencyMap.get(num) === 0) {
        // If the frequency of 'num' is already zero, continue to the next element
        continue;
      }
  
      const doubleNum = 2 * num;
  
      if (!frequencyMap.has(doubleNum) || frequencyMap.get(doubleNum) === 0) {
        // If the double of 'num' is not present or its frequency is zero, 'changed' is not a doubled array
        return [];
      }
  
      // Decrement the frequency of 'num' and its double in 'changed'
      frequencyMap.set(num, frequencyMap.get(num) - 1);
      frequencyMap.set(doubleNum, frequencyMap.get(doubleNum) - 1);
  
      // Append 'num' to 'original'
      original.push(num);
    }
  
    return original;
  }
  
let changed=[1,3,4,2,6,8];
console.log(findOriginalArray(changed));  