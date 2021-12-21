// Leetcode #217
// https://leetcode.com/problems/contains-duplicate

// 12/17/2021
const containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums.slice(i + 1).indexOf(nums[i]) > -1) {
            return true
        }
    }    
    return false;
};

// 7/23/2021
var containsDuplicate = function(nums) {
    return nums.filter((x, index, arr) => arr.indexOf(x) === index).length !== nums.length;
};


