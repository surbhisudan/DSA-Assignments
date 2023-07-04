
function buildTree(s) {
    const stack = [];
    let num = '';
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        // Start of a new node
        const node = parseInt(num);
        num = '';
  
        if (stack.length > 0) {
          // Connect the node to its parent
          const parent = stack[stack.length - 1];
          if (!parent.left) {
            parent.left = node;
          } else {
            parent.right = node;
          }
        }
        stack.push({ val: node, left: null, right: null });
      } else if (s[i] === ')') {
        // End of a node
        stack.pop();
      } else {
        // Numeric value
        num += s[i];
      }
    }
  
    return stack[0];
  }
  
  // Example usage:
  const s = "4(2(3)(1))(6(5))";
  const tree = buildTree(s);
  console.log(tree);
  