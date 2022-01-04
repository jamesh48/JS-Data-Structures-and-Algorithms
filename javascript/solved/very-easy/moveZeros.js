// Leetcode #283
// https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {
    return nums.sort((a,b) => !b && -1)
};
