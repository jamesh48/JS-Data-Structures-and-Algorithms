/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const split = s.split(' ');
  const test = split.map((word) => word.split('').reverse().join(''));
  return test.join(' ');
};
