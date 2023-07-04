function compress(chars) {
  let writeIndex = 0;
  let count = 1;

  for (let i = 0; i < chars.length; i++) {
    if (i + 1 === chars.length || chars[i] !== chars[i + 1]) {
      chars[writeIndex] = chars[i];
      writeIndex++;

      if (count > 1) {
        const countString = count.toString();
        for (let j = 0; j < countString.length; j++) {
          chars[writeIndex] = countString[j];
          writeIndex++;
        }
      }

      count = 1;
    } else {
      count++;
    }
  }

  return writeIndex;
}

// Example usage:
const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
const compressedLength = compress(chars);
console.log(chars.slice(0, compressedLength));
