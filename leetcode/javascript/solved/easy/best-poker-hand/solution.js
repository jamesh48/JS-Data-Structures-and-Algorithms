/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  if (suits.every((suit, index, arr) => arr[0] === suit)) return 'Flush';
  let pairFlag = false;
  for (let i = 0; i < ranks.length; i++) {
    const currentRank = ranks[i];
    const currentRankCount =
      ranks.slice(i + 1).filter((rank) => rank === currentRank).length + 1;
    if (currentRankCount === 3) {
      return 'Three of a Kind';
    } else if (currentRankCount === 2) {
      pairFlag = true;
    }

    if (i === ranks.length - 1) {
      return pairFlag ? 'Pair' : 'High Card';
    }
  }
};
