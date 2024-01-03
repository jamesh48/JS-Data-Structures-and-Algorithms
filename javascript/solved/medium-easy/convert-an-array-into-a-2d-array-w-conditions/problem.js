/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  let hash = Object.entries(
    nums.reduce((total, item) => {
      if (!total[item]) {
        total[item] = 1;
      } else {
        total[item] = total[item] + 1;
      }
      return total;
    }, {})
  );

  let resultArr = [];
  while (true) {
    let innerArr = [];
    let modified = false;
    for (let i = 0; i < hash.length; i++) {
      if (hash[i][1]) {
        innerArr.push(hash[i][0]);
        hash[i][1]--;
        modified = true;
      }
    }
    if (!modified) {
      break;
    }
    resultArr.push(innerArr);
  }
  return resultArr;
};
