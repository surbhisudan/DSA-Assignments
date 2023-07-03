function addStrings(num1, num2) {
    let carry = 0;
    let result = "";
  
    let i = num1.length - 1;
    let j = num2.length - 1;
  
    while (i >= 0 || j >= 0 || carry > 0) {
      const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
      const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
  
      const sum = digit1 + digit2 + carry;
      carry = Math.floor(sum / 10);
      const digit = sum % 10;
  
      result = digit + result;
  
      i--;
      j--;
    }
  
    return result;
  }
  let num="11",num2="123";
  console.log(addStrings(num,num2));