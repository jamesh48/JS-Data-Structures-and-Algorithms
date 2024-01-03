/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  let i = 0;
  while (i < k) {
    const max = Math.max(...gifts);
    const maxIndex = gifts.indexOf(max);
    gifts[maxIndex] = Math.floor(Math.sqrt(max));
    i++;
  }
  return gifts.reduce((total, item) => total + item, 0);
};
