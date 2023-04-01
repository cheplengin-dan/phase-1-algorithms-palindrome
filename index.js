function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
  use a some string methods to check if palindrome is available
*/

/*
  Add written explanation of your solution here
  split(). The split method  splits a string into an array of substrings based on a specified separator. For example, if you have a string "Hello World" and you want to split it into an array of two elements "Hello" and "World", you can use the split() method.
  reverse(). The reverse method reverses a string. For example, if you have a string "Hello World" and you want to reverse it, you can use the reverse() method.
  join(). The join method joins an array of strings into a single string. For example, if you have an array of strings "Hello" and "World" and you want to join them into a single string, you can use the join() method.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
