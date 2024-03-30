/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  let n = matrix[0].length;
  let result = false;

  for (let i = 0; i < n; i++) {
    const testArr = Array.from({ length: n }, (v, i) => i + 1);
    for (let j = 0; j < n; j++) {
      if (testArr.indexOf(matrix[i][j]) !== -1) {
        testArr.splice(testArr.indexOf(matrix[i][j]), 1);
      }
    }
    if (testArr.length) {
      return false;
    }
  }
  for (let j = 0; j < n; j++) {
    const testArr = Array.from({ length: n }, (v, i) => i + 1);
    for (let i = 0; i < n; i++) {
      let currentElIndex = testArr.indexOf(matrix[i][n - 1 - j]);
      if (currentElIndex !== -1) {
        testArr.splice(currentElIndex, 1);
      }
    }
    if (testArr.length) {
      return false;
    }
  }
  return true;
};
