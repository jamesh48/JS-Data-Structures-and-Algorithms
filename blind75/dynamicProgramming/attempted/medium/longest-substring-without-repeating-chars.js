// Leetcode #3
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    if (s.length === 1) return 1;
    let countArr = [];
    for (let i = 0; i < s.length; i++) {
        let testArr = [];
        for (let j = i; j < s.length; j++) {
            if (testArr.indexOf(s[j]) === -1) {
                testArr.push(s[j]);
            } else {
                countArr.push(testArr.length);
                break;
            }
            countArr.push(testArr.length);
        }
    }
    return Math.max(...countArr)
};
