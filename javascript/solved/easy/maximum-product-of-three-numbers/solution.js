const reduceProduct = (nums) => nums.reduce((total, item) => total * item, 1);

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  const positiveNumbers = nums
    .filter((x) => x >= 0)
    .sort((a, b) => b - a)
    .slice(0, 3);
  let negativeNumbers = nums.filter((y) => y < 0).sort((a, b) => b - a);

  if (!positiveNumbers.length) {
    return reduceProduct(negativeNumbers.slice(0, 3));
  }

  negativeNumbers = negativeNumbers.reverse().slice(0, 2);

  if (negativeNumbers.length === 2) {
    const negativeNumberProduct = reduceProduct(negativeNumbers);
    const bestPositive = positiveNumbers[0];
    return Math.max(
      negativeNumberProduct * bestPositive,
      reduceProduct(positiveNumbers)
    );
  }
  return positiveNumbers.reduce((total, item) => total * item, 1);
};
