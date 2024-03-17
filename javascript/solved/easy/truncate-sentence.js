// Leetcode #1816
// https://leetcode.com/problems/truncate-sentence/

// 12/22/21
const truncateSentence = function(s, k) {
    const split = s.split(' ');
    const sliced = split.slice(0, k);
    return sliced.join(' ');
};
