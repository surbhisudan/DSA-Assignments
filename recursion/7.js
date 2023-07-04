function decodeString(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== ']') {
        stack.push(s[i]);
      } else {
        // Find the opening bracket '['
        let curr = stack.pop();
        let decodedString = '';
        
        // Build the encoded string inside the brackets
        while (curr !== '[') {
          decodedString = curr + decodedString;
          curr = stack.pop();
        }
        
        // Find the number 'k' before the opening bracket
        let k = '';
        curr = stack.pop();
        while (!isNaN(curr)) {
          k = curr + k;
          curr = stack.pop();
        }
        
        // Repeat the decoded string 'k' times
        stack.push(curr); // Push back the non-digit character
        stack.push(decodedString.repeat(Number(k)));
      }
    }
    
    return stack.join('');
  }
  
  // Example usage:
  const encodedString = "3[a]2[bc]";
  console.log(decodeString(encodedString));  // Output: "accaccacc"
  