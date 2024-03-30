/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  let resultArr = [];
  for (let i = 0; i < l.length; i++) {
    const sorted = nums.slice(l[i], r[i] + 1).sort((a, b) => a - b);
    const difference = sorted[1] - sorted[0];
    resultArr.push(
      sorted.every((item, index, arr) =>
        !isNaN(arr[index + 1]) ? arr[index + 1] - item === difference : true
      )
    );
  }
  return resultArr;
};
