/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  if (nums.indexOf(0) !== -1) {
    return 0;
  }
  return nums
    .map((x) => {
      if (x > 0) return 1;
      if (x < 0) return -1;
    })
    .reduce((total, item) => total * item);
};
