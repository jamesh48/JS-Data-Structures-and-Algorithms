// Leetcode 1389
// https://leetcode.com/problems/create-target-array-in-the-given-order/

var createTargetArray = function(nums, index) {
    return nums.reduce((total, item, idx) => {
        total.splice(index[idx], 0, item)
        return total;
    }, [])
};
