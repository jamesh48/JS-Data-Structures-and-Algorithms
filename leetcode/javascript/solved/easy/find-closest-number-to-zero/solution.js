/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  let min = Infinity;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    const test = Math.abs(nums[i] - 0);
    if (test < min) {
      min = test;
      result = nums[i];
    } else if (test === min) {
      if (nums[i] > result) {
        result = nums[i];
      }
    }
  }
  return result;
};
