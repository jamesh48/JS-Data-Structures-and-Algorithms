/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let newArray = nums.slice(0);
    newArray.splice(i, 1);
    if (
      newArray.every(
        (num, index, arr) =>
          arr[index + 1] === undefined || arr[index + 1] > num
      )
    ) {
      return true;
    }
  }
  return false;
};
