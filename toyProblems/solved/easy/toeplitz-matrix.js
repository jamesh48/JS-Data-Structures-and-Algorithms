// Leetcode 766
// https://leetcode.com/problems/toeplitz-matrix/

// 1/3/22 (from pramp interview);
const isToeplitzMatrix = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0 && j === matrix[i].length - 1) {
        continue;
      }
      if (i === matrix.length - 1 && j === 0) {
        continue;
      }
      if (
        matrix[i + 1] &&
        typeof matrix[i + 1][j + 1] === "number" &&
        matrix[i][j] !== matrix[i + 1][j + 1]
      ) {
        return false;
      }
    }
  }
  return true;
};
