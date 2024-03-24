/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  let i = 0;
  while (i < nums.length) {
    const testNums = nums.slice();
    testNums.splice(i, 1);
    if (
      testNums.every(
        (testNum, index, arr) => !arr[index + 1] || arr[index + 1] > testNum
      )
    ) {
      return true;
    }
    i++;
  }
  return false;
};
