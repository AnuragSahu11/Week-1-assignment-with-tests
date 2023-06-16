/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const strOneArr = str1.split("").map((letter) => letter.toUpperCase());
  const strTwoArr = str2.split("").map((letter) => letter.toUpperCase());
  const letterCount = {};
  const strTwoLetterCount = {};
  if (strOneArr.length === strTwoArr.length) {
    for (let i = 0; i < strOneArr.length; i++) {
      const crrLetterCount = letterCount[strOneArr[i]];
      if (crrLetterCount) {
        letterCount[strOneArr[i]]++;
      } else {
        letterCount[strOneArr[i]] = 1;
      }
    }
    for (let i = 0; i < strTwoArr.length; i++) {
      const crrLetterCount = strTwoLetterCount[strTwoArr[i]];
      if (crrLetterCount) {
        strTwoLetterCount[strTwoArr[i]]++;
      } else {
        strTwoLetterCount[strTwoArr[i]] = 1;
      }
    }
    const letterArr = Object.keys(letterCount);
    for (let i = 0; i < letterArr.length; i++) {
      const crrLetter = letterArr[i];
      if (strTwoLetterCount[crrLetter]) {
        if (letterCount[crrLetter] !== strTwoLetterCount[crrLetter]) {
          return false;
          break;
        }
      } else {
        return false;
        break;
      }
    }
  } else {
    return false;
  }
  return true;
}

module.exports = isAnagram;
