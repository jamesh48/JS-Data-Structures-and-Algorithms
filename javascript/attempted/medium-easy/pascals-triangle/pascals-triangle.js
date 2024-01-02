/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [];

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      result.push([1]);
      continue;
    }

    if (i === 1) {
      result.push([1, 1]);
      continue;
    }

    let innerArr = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        innerArr.push(1);
        continue;
      }

      const previousAdded = result[i - 1]
        .slice(j - 1, j + 1)
        .reduce((total, item) => total + item, 0);
      innerArr.push(previousAdded);
    }

    result.push(innerArr);
  }
  return result;
};
