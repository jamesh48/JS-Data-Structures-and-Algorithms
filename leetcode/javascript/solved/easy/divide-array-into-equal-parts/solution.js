/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const reduced = nums.reduce((total, item) => {
    if (!total[item]) {
      total[item] = 1;
    } else {
      total[item] = total[item] + 1;
    }
    return total;
  }, {});

  for (const key in reduced) {
    if (reduced[key] % 2 !== 0) {
      return false;
    }
  }
  return true;
};
