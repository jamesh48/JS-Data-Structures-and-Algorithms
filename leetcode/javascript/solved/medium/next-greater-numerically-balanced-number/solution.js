const evaluateCurrentNumber = (num) => {
  return num
    .toString()
    .split('')
    .map((char) => Number(char))
    .every((numX, _index, arr) => {
      if (arr.filter((num) => num === numX).length === numX) {
        return true;
      }
    });
};

/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function (n) {
  n = n + 1;
  while (evaluateCurrentNumber(n) !== true) {
    n++;
  }
  return n;
};
