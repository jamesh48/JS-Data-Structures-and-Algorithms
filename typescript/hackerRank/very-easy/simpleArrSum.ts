// Hackerrank 1/7/2022
// https://www.hackerrank.com/challenges/simple-array-sum
function simpleArraySum(ar: number[]): number {
  return ar.reduce((acc, item) => {
      return acc + item;
  }, 0)
}