/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const n = nums.length / 2;
  const set = new Set(nums);
  for (const item of set) {
    if (nums.filter((num) => num === item).length === n) {
      return item;
    }
  }
};
