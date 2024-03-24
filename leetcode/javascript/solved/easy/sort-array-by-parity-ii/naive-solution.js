/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const [evenNums, oddNums] = nums.reduce(
    (total, num) => {
      if (num % 2 === 0) {
        total[0].push(num);
      } else {
        total[1].push(num);
      }
      return total;
    },
    [[], []]
  );

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      result.push(evenNums.pop());
    } else {
      result.push(oddNums.pop());
    }
  }
  return result;
};
