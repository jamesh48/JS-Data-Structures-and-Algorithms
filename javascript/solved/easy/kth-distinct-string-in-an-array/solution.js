/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  let cache = [];
  let distinctStrs = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(i + 1).indexOf(arr[i]) !== -1) {
      cache.push(arr[i]);
      continue;
    } else if (cache.indexOf(arr[i]) !== -1) {
      continue;
    } else {
      distinctStrs.push(arr[i]);
    }
  }

  return distinctStrs[k - 1] || '';
};
