/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] * 2) {
        return true;
      }
      if (arr[j] === arr[i] * 2) {
        return true;
      }
    }
  }
  return false;
};
