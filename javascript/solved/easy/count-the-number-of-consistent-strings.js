// Leetcode #1684
// https://leetcode.com/problems/count-the-number-of-consistent-strings/

// 12/22/21->
const countConsistentStrings = function (allowed, words) {
  let count = 0;
  words.forEach((word) => {
    const testWord = word.split("");
    for (let i = 0; i < testWord.length; i++) {
      if (allowed.indexOf(testWord[i]) === -1) {
        break;
      }
      if (allowed.indexOf(testWord[i]) > -1 && i === testWord.length - 1) {
        count++;
      }
    }
  });
  return count;
};
