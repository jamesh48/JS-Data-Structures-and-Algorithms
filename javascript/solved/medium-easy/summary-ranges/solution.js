/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const inputArr = nums.slice(0);
  const resultArr = [];
  while (inputArr.length) {
    let ptr = 0;
    let min = inputArr[ptr]; // 0
    let max = 0; // 0
    let skipCurrentIteration = true;
    while (inputArr[ptr + 1] && inputArr[ptr] + 1 === inputArr[ptr + 1]) {
      skipCurrentIteration = false;
      max = inputArr[ptr + 1];
      ptr++;
    }

    if (skipCurrentIteration) {
      resultArr.push(`${min}`);
      inputArr.splice(0, 1);
    } else {
      resultArr.push(`${min}->${max}`);
      inputArr.splice(0, max + 1 - min);
    }
  }
  return resultArr;
};
