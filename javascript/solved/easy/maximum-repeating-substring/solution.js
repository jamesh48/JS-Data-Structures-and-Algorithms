/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let count = 0;
  let splitSequence = sequence.split('');
  let indexMap = [];
  for (let i = 0; i < splitSequence.length; i++) {
    if (splitSequence.slice(i, i + word.length).join('') === word) {
      indexMap.push(i);
    }
  }
  if (!indexMap.length) return 0;

  let j = 0;
  let maxCount = 0;
  while (j < indexMap.length) {
    let thisCount = 0;
    for (i = indexMap[j]; i < splitSequence.length; i += word.length) {
      console.log(i, j, splitSequence.slice(i, i + word.length).join(''));
      if (splitSequence.slice(i, i + word.length).join('') === word) {
        thisCount++;
        continue;
      }
      break;
    }
    if (thisCount > maxCount) {
      maxCount = thisCount;
    }
    j++;
  }
  return maxCount;
};

// "aaabaaabaaaabaaaabaaaabaaaaba"
// "aaaba"
