/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  let resultArr = nums.filter((x) => x % 2 === 0 && x % 3 === 0);
  if (!resultArr.length) return 0;

  return Math.floor(
    resultArr.reduce((total, item) => total + item, 0) / resultArr.length
  );
};
