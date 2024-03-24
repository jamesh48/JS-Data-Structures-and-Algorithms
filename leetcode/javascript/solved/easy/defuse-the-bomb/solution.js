/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  if (k !== 0) {
    let circular = code;
    let x = k;
    if (x > 0) {
      while (x !== 0) {
        circular = circular.concat(code);
        x--;
      }
      for (let i = 0; i < code.length; i++) {
        code[i] = (() => {
          let acc = 0;
          let y = k;
          while (y !== 0) {
            acc += circular[i + y];
            y--;
          }
          return acc;
        })();
      }
      return code;
    }

    if (x < 0) {
      while (x !== 0) {
        circular = circular.concat(code);
        x++;
      }
      code = code.reverse();
      circular = circular.reverse();
      for (let i = 0; i < code.length; i++) {
        code[i] = (() => {
          let acc = 0;
          let y = k;
          while (y !== 0) {
            acc += circular[i + Math.abs(y)];
            y++;
          }
          return acc;
        })();
      }
      return code.reverse();
    }
  }
  return code.map(() => 0);
};
