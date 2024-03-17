const countNums = (arr, filterBy) => {
  return arr.filter((char) => char === filterBy).length;
};

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  const split = s.split('');
  let maxScore = 0;

  for (let i = 1; i < split.length; i++) {
    const leftSide = split.slice(0, i);
    const rightSide = split.slice(i);
    const currentScore = countNums(leftSide, '0') + countNums(rightSide, '1');
    if (currentScore > maxScore) {
      maxScore = currentScore;
    }
  }
  return maxScore;
};
