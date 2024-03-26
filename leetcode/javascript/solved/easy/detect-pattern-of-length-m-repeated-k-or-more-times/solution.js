/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, k) {
  let h = 0;
  while (h < arr.length) {
    for (let i = h; i < arr.length; i += m) {
      const currentPattern = arr.slice(i, i + m);
      let count = 1;
      for (let j = i + m; j < arr.length; j += m) {
        const testPattern = arr.slice(j, j + m);
        console.log(currentPattern, testPattern);
        if (
          currentPattern.every((item, index) => testPattern[index] === item)
        ) {
          count++;
          if (count === k) {
            return true;
          }
        } else {
          break;
        }
      }
    }
    h++;
  }
  return false;
};
