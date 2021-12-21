// https://leetcode.com/problems/two-sum/
// August 2nd 2021
var twoSum = function(nums, target) {    
    return nums.reduce((total, item, index) => {
        if (total.answer) return total;
        if (total[target - item]) {
            total.answer = [...total[target - item], index];            
        };         
        total[item] ||= [index];
        return total;
    }, {}).answer;
};

// December 17th 2021

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let testArr = nums.slice(i);
        for (let j = 0; j < testArr.length; j++) {
            if (nums[i] + testArr[j] === target && i !== i + j) {
                return [i, i + j]
            }
        }
    }
};
