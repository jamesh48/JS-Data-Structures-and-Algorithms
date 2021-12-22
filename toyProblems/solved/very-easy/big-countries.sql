/* Leetcode #595 */
/* https://leetcode.com/problems/big-countries/ */

/* 12/22/21 */
SELECT name, population, area
FROM World
WHERE population >= 25000000 OR area >= 3000000;