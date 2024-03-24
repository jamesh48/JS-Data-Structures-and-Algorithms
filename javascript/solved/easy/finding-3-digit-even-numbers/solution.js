/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  let resultArr = [];
  for (let i = 100; i <= 999; i++) {
    if (i % 2 === 0) {
      const testArr = i
        .toString()
        .split('')
        .map((num) => Number(num));
      let testDigits = digits.slice();
      if (
        testArr.every((num) => {
          const testIndex = testDigits.indexOf(num);
          if (testIndex !== -1) {
            testDigits.splice(testIndex, 1);
            return true;
          }
        })
      ) {
        resultArr.push(Number(testArr.join('')));
      }
    }
  }

  return resultArr;
};
