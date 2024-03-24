/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  if (s.indexOf('a') === -1 || s.indexOf('b') === -1) {
    return true;
  }
  const firstIndexOfB = s.indexOf('b');
  const lastIndexOfA = s.lastIndexOf('a');
  return lastIndexOfA < firstIndexOfB;
};
