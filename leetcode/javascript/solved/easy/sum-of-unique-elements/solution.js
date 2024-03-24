/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const filtered = nums.filter((num, index, arr) => {
    if (
      arr.slice(index + 1).indexOf(num) === -1 &&
      arr.slice(0, index).indexOf(num) === -1
    ) {
      return num;
    }
  });
  return filtered.reduce((total, item) => total + item, 0);
};
