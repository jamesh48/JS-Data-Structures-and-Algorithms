/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  const split = brokenLetters.split('');

  return text.split(' ').reduce((count, word) => {
    if (split.every((char) => word.indexOf(char) === -1)) {
      count++;
    }
    return count;
  }, 0);
};
