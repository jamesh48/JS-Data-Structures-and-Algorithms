const constructHash = (arr) => {
  return arr.reduce((total, item) => {
    if (!total[item]) {
      total[item] = 1;
    } else {
      total[item] = total[item] + 1;
    }
    return total;
  }, {});
};

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  const targetCount = constructHash(target);
  const arrCount = constructHash(arr);

  for (const key in targetCount) {
    if (arrCount[key] !== targetCount[key]) {
      return false;
    }
  }

  return true;
};
