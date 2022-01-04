// Leetcode #1614
// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

// 12/22/21 (with help)
var maxDepth = function(s) {
    let stack = [];
    let maxDepth = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('(')
            maxDepth = Math.max(maxDepth, stack.length);
        } else if (s[i] === ')') {
            stack.pop();
        }
    }
    
    return maxDepth;
};
