const evaluateSelfDividingNumber = (num) => {
  return num
    .toString()
    .split('')
    .map((x) => Number(x))
    .every((y) => num % y === 0);
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let resultArr = [];

  for (let i = left; i <= right; i++) {
    if (evaluateSelfDividingNumber(i)) {
      resultArr.push(i);
    }
  }

  return resultArr;
};
