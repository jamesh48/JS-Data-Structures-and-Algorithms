// Leetcode #1221
// https://leetcode.com/problems/split-a-string-in-balanced-strings/

var balancedStringSplit = function(s) {
    let balance = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === 'L' ? balance++ : balance--;
        !balance && count++;
    }
    return count;
};
