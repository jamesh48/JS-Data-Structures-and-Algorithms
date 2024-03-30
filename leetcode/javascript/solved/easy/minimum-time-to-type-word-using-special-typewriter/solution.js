const lettersNumber = (s) => s.charCodeAt(0) - 96;
/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  word = word.split('');
  let count = 0;
  let current = lettersNumber('a');

  word.forEach((char) => {
    let currentScore = Math.abs(lettersNumber(char) - current);
    if (currentScore > 13) {
      currentScore = 26 - currentScore;
    }
    if (currentScore > 0) {
      count += currentScore;
    }
    count++;
    current = lettersNumber(char);
  });
  return count;
};
