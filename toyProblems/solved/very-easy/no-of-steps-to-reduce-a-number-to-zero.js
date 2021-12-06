// Leetcode #1342
// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

const numberOfSteps = function(num) {
    let count = 0;
   while (num !== 0) {
       num = !(num % 2) ? num / 2 : num - 1;
       count++;
   }
    return count;
};
