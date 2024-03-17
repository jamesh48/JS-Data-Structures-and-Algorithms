const reverseNum = (num) => {
  let strArr = num.toString().split('');
  let reversed = '';
  for (let i = strArr.length - 1; i >= 0; i--) {
    reversed += strArr[i];
  }
  return Number(reversed);
};

/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  return num === reverseNum(reverseNum(num));
};
