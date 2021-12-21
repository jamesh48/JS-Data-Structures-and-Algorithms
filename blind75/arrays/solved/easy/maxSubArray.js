// Leetcode #53
// https://leetcode.com/problems/maximum-subarray/
// Looked at solution code.

const maxSubArray = function(nums) {
    let maxSoFar = -Infinity;
    let maxEndingHere = 0;
    
    for (let i = 0; i < nums.length; i++) {
        maxEndingHere = maxEndingHere + nums[i];
        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere
        }
        
        if (maxEndingHere < 0) {
            maxEndingHere = 0
        }
    }    
    return maxSoFar
};
