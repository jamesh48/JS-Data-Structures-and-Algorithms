// Leetcode #2000
// https://leetcode.com/problems/reverse-prefix-of-word/

// 12/22/21->
const reversePrefix = function(word, ch) {
    const firstIndex = word.indexOf(ch);
    const first = word.slice(0, firstIndex + 1);
    const firstReversed = first.split('').reverse().join('');
    let last = word.slice(firstIndex + 1);
    return firstReversed.concat(last);
};
