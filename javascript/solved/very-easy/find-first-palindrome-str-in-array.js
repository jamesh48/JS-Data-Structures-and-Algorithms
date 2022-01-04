// Leetcode #2108
// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/


// 12/22/21
var firstPalindrome = function(words) {
    for (let i = 0; i < words.length; i++) {
        if (JSON.stringify(words[i].split('').reverse()) === JSON.stringify(words[i].split(''))) {
            return words[i];
        }
    }
    return '';
};
