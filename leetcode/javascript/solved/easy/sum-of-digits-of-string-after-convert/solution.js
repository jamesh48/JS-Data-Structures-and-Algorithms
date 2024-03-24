const alphaVal = (s) => s.toLowerCase().charCodeAt(0) - 97 + 1;

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let numbers = s
    .split('')
    .map((num) => alphaVal(num))
    .join('')
    .split('')
    .map((num) => Number(num));
  while (k !== 0) {
    numbers = numbers.reduce((total, item) => total + item, 0);
    numbers = numbers
      .toString()
      .split('')
      .map((x) => Number(x));
    k--;
  }
  return Number(numbers.join(''));
};
