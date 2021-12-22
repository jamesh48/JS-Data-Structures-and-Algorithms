// Leetcode #1732
// https://leetcode.com/problems/find-the-highest-altitude/

// 12/22/21
const largestAltitude = function(gain) {
  let max = 0;

  let test = gain.reduce((total, item) => {
      if (total + item > max) {
          max = total + item;
      }
      return total + item;
  }, 0)

  return max;
};