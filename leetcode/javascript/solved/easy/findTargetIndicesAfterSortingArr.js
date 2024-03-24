// Leetcode #2089
// https://leetcode.com/problems/find-target-indices-after-sorting-array/

var targetIndices = function(nums, target) {
    return nums.sort((a, b) => {
        return a - b;
    }).reduce((total, num, index) => {
        if (num === target) {
            total.push(index);
        }
        return total;
    }, [])
};
