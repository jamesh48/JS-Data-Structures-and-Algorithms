/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  return l.reduce((resultArr, item, idx, arr) => {
    const sorted = nums.slice(l[idx], r[idx] + 1).sort((a, b) => a - b);
    const difference = sorted[1] - sorted[0];
    resultArr.push(
      sorted.every((evItm, evIdx, evArr) =>
        !isNaN(evArr[evIdx + 1])
          ? evArr[evIdx + 1] - evItm === difference
          : true
      )
    );
    return resultArr;
  }, []);
};
