function backspaceCompare(s, t) {
    return buildString(s) === buildString(t);
  }
  
  function buildString(str) {
    const stack = [];
  
    for (let char of str) {
      if (char !== '#') {
        stack.push(char);
      } else {
        stack.pop();
      }
    }
  
    return stack.join('');
  }
let s = "ab#c", t = "ad#c";
console.log(backspaceCompare(s,t));  