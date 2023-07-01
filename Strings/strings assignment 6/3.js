function validMountainArray(arr) {
    const n = arr.length;
    let i = 0;
  
    // Step 1: Find the peak element
    while (i < n - 1 && arr[i] < arr[i + 1]) {
      i++;
    }
  
    // Step 2: Check if peak exists and it's not the first or last element
    if (i === 0 || i === n - 1) {
      return false;
    }
  
    // Step 3: Check the decreasing part of the array
    while (i < n - 1 && arr[i] > arr[i + 1]) {
      i++;
    }
  
    // Step 4: Return true if we have reached the end of the array
    return i === n - 1;
  }
  let arr=[2,1];
  console.log(validMountainArray(arr));