function reverseWords(s) {
    const words = s.split(" ");
    const reversedWords = [];
  
    for (let word of words) {
      reversedWords.push(reverseWord(word));
    }
  
    return reversedWords.join(" ");
  }
  
  function reverseWord(word) {
    let reversed = "";
  
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i];
    }
  
    return reversed;
  }
let s = "Let's take LeetCode contest";
console.log(reverseWords(s));  