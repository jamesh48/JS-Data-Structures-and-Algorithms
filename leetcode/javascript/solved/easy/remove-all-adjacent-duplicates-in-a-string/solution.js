/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const arr = s.split('');
  let i = 0;
  while (i !== arr.length - 1 && arr.length) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2);
      i = 0;
    } else {
      i++;
    }
  }
  return arr.join('');
};
