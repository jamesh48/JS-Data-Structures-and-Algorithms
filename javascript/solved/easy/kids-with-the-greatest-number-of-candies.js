// Leetcode #1431
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

const kidsWithCandies = (candies, extraCandies) => candies.reduce((r, kC, idx, arr) => (arr[idx + 1] && [r[0].concat(!!(kC + extraCandies >= r[1])), r[1]]) || r[0].concat(!!(kC + extraCandies >= r[1])), [[], Math.max(...candies)]);
