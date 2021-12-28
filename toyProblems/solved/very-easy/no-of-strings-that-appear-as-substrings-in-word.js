// Leetcode 1967
// https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/


// 12/22/21

var numOfStrings = function(patterns, word) {
    let count = 0;
    for (let i = 0; i < patterns.length; i++) {
        if (word.indexOf(patterns[i]) > -1) {
            count++
        }
    }
    return count;
};
