// Leetcode #2006
// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

// 12/22/21 
const countKDifference = function(nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] - nums[j] === k && i !== j) {
                count++
            } else if (nums[j] - nums[i] === k && i !== j) {
                count++;
            }
        }
    }
    return count;
};
