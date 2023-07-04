function isValid(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '*') {
        stack.push(s[i]);
      } else if (s[i] === ')') {
        if (stack.length === 0) {
          return false; // No matching left parenthesis or asterisk
        }
  
        // Pop the top of the stack if it's a left parenthesis or replace '*' with an empty string
        if (stack[stack.length - 1] === '(') {
          stack.pop();
        } else if (stack[stack.length - 1] === '*') {
          stack.pop();
        } else {
          return false; // No matching left parenthesis or asterisk
        }
      }
    }
  
    // Process remaining asterisks and left parentheses
    while (stack.length > 0) {
      if (stack[stack.length - 1] === '(' || stack[stack.length - 1] === '*') {
        stack.pop();
      } else {
        return false; // Unmatched left parenthesis
      }
    }
  
    return true;
  }
  
  // Example usage:
  const s = "((*)";
  const isValidString = isValid(s);
  console.log(isValidString);
  