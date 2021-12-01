// Leet code #1470
// https://leetcode.com/problems/shuffle-the-array/

var shuffle = function(nums, n) {
  let resultArr = [];
    
    for (let i = 0; i < nums.length - n; i++) {
        resultArr.push(nums[i])
        resultArr.push(nums[i + n])
    }
    
    return resultArr;
};
