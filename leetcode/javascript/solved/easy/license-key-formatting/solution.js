/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  const test = s.split('').filter((char) => char !== '-');
  let result = '';
  for (let i = test.length - 1; i >= 0; i -= k) {
    const determinant = (() => {
      if (i + 1 - k < 0) {
        return 0;
      }
      return i + 1 - k;
    })();

    const currentResult = test
      .slice(determinant, i + 1)
      .join('')
      .toUpperCase();
    if (i === test.length - 1) {
      result = currentResult;
    } else {
      result = currentResult + '-' + result;
    }
  }
  return result;
};
