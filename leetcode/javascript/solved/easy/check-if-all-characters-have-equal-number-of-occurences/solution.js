/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  return Object.values(
    s.split('').reduce((hash, item) => {
      if (!hash[item]) {
        hash[item] = 1;
      } else {
        hash[item] = hash[item] + 1;
      }
      return hash;
    }, {})
  ).every((count, index, arr) => arr[0] === count);
};
