/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  return s.split('').map((_letter, index, arr) => {
    let decrementingIndex = -1;
    for (let i = index; i >= 0; i--) {
      decrementingIndex++;

      if (arr[i] === c) break;

      if (i === 0) {
        decrementingIndex = Infinity;
      }
    }

    let incrementingIndex = -1;
    for (let i = index; i < arr.length; i++) {
      incrementingIndex++;

      if (arr[i] === c) break;

      if (i === arr.length - 1) {
        incrementingIndex = Infinity;
      }
    }

    return Math.min(decrementingIndex, incrementingIndex);
  });
};
