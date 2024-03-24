/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function (num) {
  if (num === 0) return 0;
  if (num > 0) {
    const smallestWithoutZero = Math.min(
      ...num
        .toString()
        .split('')
        .filter((num) => num !== '0')
        .map((char) => Number(char))
    );
    let remainingNums = num.toString().split('');
    const spliceIndex = remainingNums.indexOf(smallestWithoutZero.toString());
    remainingNums.splice(spliceIndex, 1);
    remainingNums = remainingNums.map((num) => Number(num));

    let stringNum = smallestWithoutZero.toString();
    while (remainingNums.length) {
      stringNum += remainingNums.splice(
        remainingNums.indexOf(Math.min(...remainingNums)),
        1
      );
    }
    return Number(stringNum);
  } else {
    const largestWithoutZero = Math.max(
      ...num
        .toString()
        .split('')
        .map((char) => Number(char))
        .filter((num) => !isNaN(num) && num !== 0)
    );
    let remainingNums = num.toString().split('');
    const spliceIndex = remainingNums.indexOf(largestWithoutZero.toString());
    remainingNums.splice(spliceIndex, 1);
    remainingNums = remainingNums
      .filter((num) => !isNaN(num))
      .map((num) => Number(num));
    let stringNum = '-' + largestWithoutZero.toString();
    while (remainingNums.length) {
      stringNum += remainingNums.splice(
        remainingNums.indexOf(Math.max(...remainingNums)),
        1
      );
    }
    return Number(stringNum);
  }
};
