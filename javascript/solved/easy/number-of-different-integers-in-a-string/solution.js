/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  let test = word.split('').reduce((total, item, index, arr) => {
    if (isNaN(item) && isNaN(arr[index + 1])) {
      total.push(' ');
      index++;
    } else if (isNaN(item)) {
      total.push(' ');
    } else {
      total.push(item);
    }
    return total;
  }, []);
  test = test.join('').trim();

  return test.split(' ').reduce(
    (acc, item, index, arr) => {
      if (item && item.split('').every((num) => num === '0')) {
        if (!acc.hash['0']) {
          acc.hash['0'] = 1;
          acc.count++;
        }
        return acc;
      }
      if (item.length !== 1 && item[0] === '0') {
        item = item.toString();
        while (item[0] === '0') {
          item = item.split('');
          item.splice(0, 1);
          item = item.join('');
        }
      }

      if (item && !isNaN(Number(item)) && !acc.hash[item.toString()]) {
        acc.hash[item.toString()] = 1;
        acc.count++;
      }
      return acc;
    },
    { hash: {}, count: 0 }
  ).count;
};
