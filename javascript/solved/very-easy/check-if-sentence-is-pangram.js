// Leetcode 1832
// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

// 12/22/21

const checkIfPangram = function(sentence) {
  return sentence.split('').filter((x, i, a) => a.indexOf(x) === i).length === 26;
};