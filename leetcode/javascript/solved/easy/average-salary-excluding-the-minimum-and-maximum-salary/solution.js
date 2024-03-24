/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  salary.sort((a, b) => a - b);
  salary.pop();
  salary.shift();
  return salary.reduce((total, item) => total + item, 0) / salary.length;
};
