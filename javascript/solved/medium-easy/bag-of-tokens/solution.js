/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
  let score = 0;
  tokens.sort((a, b) => a - b);
  while (tokens.length) {
    if (tokens[0] <= power) {
      score++;
      power = power - tokens[0];
      tokens.splice(0, 1);
    } else if (score > 0 && tokens.length !== 1) {
      score--;
      power = power + tokens[tokens.length - 1];
      tokens.splice(tokens.length - 1, 1);
    } else {
      break;
    }
  }

  return score;
};
