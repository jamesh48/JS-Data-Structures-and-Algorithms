/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let max = -Infinity;
  let sum = 0;
  let slow = 0;
  let count = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    sum += nums[fast];
    count++;
    if (count === k) {
      max = Math.max(max, sum / k);
      sum -= nums[slow];
      slow++;
      count--;
    }
  }
  return max;
};
