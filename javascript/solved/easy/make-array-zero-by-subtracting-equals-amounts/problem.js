/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let count = 0;
  const recurseNums = (theseNums) => {
    if (theseNums.every((num) => num === 0)) {
      return;
    }
    const smallest = Math.min(...theseNums.filter((x) => x));
    for (let i = 0; i < theseNums.length; i++) {
      if (theseNums[i] === 0) {
        continue;
      }
      theseNums[i] = theseNums[i] - smallest;
    }
    count = count + 1;
    return recurseNums(theseNums);
  };

  recurseNums(nums);

  return count;
};
