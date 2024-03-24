/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  if (n % 2 !== 0) {
    return [...new Array(n)].map((x) => 'a').join('');
  } else {
    return [...new Array(n)]
      .map((x, index) => {
        if (index === 0) {
          return 'b';
        }
        return 'a';
      })
      .join('');
  }
};
