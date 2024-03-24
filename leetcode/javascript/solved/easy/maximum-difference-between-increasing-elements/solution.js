/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let max = -1;
  for (let i = nums.length; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j] && nums[i] - nums[j] > max) {
        max = nums[i] - nums[j];
      }
    }
  }
  return max;
};
