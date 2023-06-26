/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const upperCaseStr = str
    .split(" ")
    .join("")
    .split(",")
    .join("")
    .split("!")
    .join("")
    .split(".")
    .join("")
    .split("?")
    .join("")
    .toUpperCase();
  console.log(upperCaseStr);
  const wordLength = upperCaseStr.length;
  console.log(wordLength, upperCaseStr);
  for (letterCount = 0; letterCount < wordLength; letterCount++) {
    console.log(
      upperCaseStr[letterCount],
      upperCaseStr[wordLength - letterCount - 1]
    );
    if (
      upperCaseStr[letterCount] === upperCaseStr[wordLength - letterCount - 1]
    ) {
      letterCount++;
    } else {
      return false;
      break;
    }
  }
  return true;
}
// isPalindrome("heyyyyd");
module.exports = isPalindrome;
