/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const countMap = s.split('').reduce((total, item) => {
    if (!total[item]) {
      total[item] = 1;
    } else {
      total[item]++;
    }
    return total;
  }, {});

  for (const key in countMap) {
    if (countMap[key] === 1) {
      return s.indexOf(key);
    }
  }

  return -1;
};
