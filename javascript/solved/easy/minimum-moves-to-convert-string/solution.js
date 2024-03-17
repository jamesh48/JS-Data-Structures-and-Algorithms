/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
  const split = s.split('');
  if (split.indexOf('X') === -1) {
    return 0;
  }
  let count = 0;

  for (let i = 0; i < split.length; i++) {
    if (split[i] === 'X') {
      count++;
      i += 2;
    }
  }
  return count;
};
