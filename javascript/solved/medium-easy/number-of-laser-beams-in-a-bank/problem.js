/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  const determiningArr = [];
  for (let i = 0; i < bank.length; i++) {
    const filteredScore = bank[i].split('').filter((x) => Number(x)).length;
    determiningArr.push(filteredScore);
  }

  return determiningArr
    .filter((x) => x)
    .reduce(
      (total, item) => {
        if (total.prev) {
          total.result = total.result + total.prev * item;
        }
        total.prev = item;
        return total;
      },
      { prev: undefined, result: 0 }
    ).result;
};
