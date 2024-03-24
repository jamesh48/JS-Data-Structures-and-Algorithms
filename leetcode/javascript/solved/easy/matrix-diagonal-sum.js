// Leetcode #1572
// https://leetcode.com/problems/matrix-diagonal-sum/

// 12/22/21 ->
const diagonalSum = function(mat) {
  if (mat.length === 1) {
      return mat[0];
  }
  let rowLength = mat[0].length;
  let sum = 0;
  const test = mat.flat();
  for (let i = 0; i < test.length; i += rowLength + 1) {
      sum += test[i];
  }

  for (let i = rowLength - 1; i < test.length - 1; i += rowLength - 1) {
      sum += test[i];
  }

  let midPoint = 0;
  if (rowLength % 2 === 1) {
      midPoint = test[(test.length - 1) / 2];
  }

  return sum - midPoint;
};