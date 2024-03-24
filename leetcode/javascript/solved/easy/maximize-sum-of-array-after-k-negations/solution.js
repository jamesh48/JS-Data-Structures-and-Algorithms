/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let i = 0;
  while (k > 0 && nums.some((num) => num < 0)) {
    nums[i] = -nums[i];
    k--;
    i++;
  }

  nums.sort((a, b) => a - b);
  if (k % 2 === 1) {
    if (nums.indexOf(0) !== -1) {
      nums[nums.indexOf(0)] = -0;
    } else {
      nums[0] = -nums[0];
    }
  }

  return nums.reduce((total, item) => total + item, 0);
};
