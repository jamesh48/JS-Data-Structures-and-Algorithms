const factorial = (n) => {
  let totalPermutations = 1;
  let x = 1;
  while (x <= n) {
    totalPermutations *= x;
    x++;
  }
  return totalPermutations;
};

var getPermutation = function (n, k) {
  let availableNumbers = Array.from({ length: n }, (_, i) => i + 1);
  let permutation = '';
  while (availableNumbers.length) {
    const currentN = availableNumbers.length;
    const totalPermutations = factorial(currentN);
    const groupingsOf = totalPermutations / currentN;
    const index = Math.ceil(k / groupingsOf) - 1;
    k %= groupingsOf;
    permutation += availableNumbers.splice(index, 1);
  }
  return permutation;
};
