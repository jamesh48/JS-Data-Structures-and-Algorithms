/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  const countMap = Object.entries(
    nums.reduce((total, item) => {
      if (item % 2 === 0) {
        if (!total[item]) {
          total[item] = 1;
        } else {
          total[item] = total[item] + 1;
        }
      }
      return total;
    }, {})
  );
  if (!countMap.length) return -1;

  countMap.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });

  return Number(countMap[0][0]);
};
