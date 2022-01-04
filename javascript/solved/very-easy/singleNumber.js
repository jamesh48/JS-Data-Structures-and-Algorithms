//https://leetcode.com/problems/single-number

const singleNumber = function(nums) {
    let answer = null;
    
    nums.forEach((num, index, arr) => {
        const thePrev = arr.slice(0, index).indexOf(num) === -1;
        const theRest = arr.slice(index + 1).indexOf(num) === -1;
        if (thePrev && theRest) {
            answer = num;
        }
    });
    
    return answer;
};

const singleNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const thePrev = nums.slice(0, i).indexOf(nums[i]) === -1;
        const theRest = nums.slice(i + 1).indexOf(nums[i]) === -1;
        if (thePrev && theRest) {
            return nums[i];
        }
    }
};
