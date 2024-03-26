const isGoodTriplet = (i, j, k, a, b, c) => {
  if (Math.abs(i - j) > a) {
    return false;
  }

  if (Math.abs(j - k) > b) {
    return false;
  }

  if (Math.abs(i - k) > c) {
    return false;
  }
  return true;
};

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (isGoodTriplet(arr[i], arr[j], arr[k], a, b, c)) {
          result.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  return result.length;
};
