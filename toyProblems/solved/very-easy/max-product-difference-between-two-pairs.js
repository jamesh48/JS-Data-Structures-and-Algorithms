// Leetcode 1913
// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/

// 12/22/21
const maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b);
  const maxPair = nums.slice(-2);
  const minPair = nums.slice(0, 2);
  return maxPair.reduce((t, i) => t * i) - minPair.reduce((t, i) => t * i);
};
