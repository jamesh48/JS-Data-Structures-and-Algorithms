/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  // create hashmap with key=number, value=array of numbers
  const hashValues = Object.values(
    nums.reduce((total, item) => {
      if (!total[item]) {
        total[item] = [item];
      } else {
        total[item] = [...total[item], item];
      }
      return total;
    }, {})
  );
  // from hashmap create array of arrays with correct sorting logic applied, use native sort or custom sort
  hashValues.sort((a, b) => {
    if (a.length === b.length) {
      if (a[0] > b[0]) {
        return -1;
      }
      return 1;
    }
    if (a.length > b.length) {
      return 1;
    }
    return -1;
  });
  // concatenate subarrays together and return for final result;
  return hashValues.reduce((total, item) => total.concat(item), []);
};
