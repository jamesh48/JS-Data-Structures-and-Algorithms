/**
 * @param {number[]} arr
 * @return {boolean}
 */
const reduceRemaining = (arr) => {
  return arr.reduce((total, item) => total + item, 0);
};

var canThreePartsEqualSum = function (arr) {
  let ptr1 = 0;
  let ptr2 = arr.length - 1;
  while (ptr1 !== ptr2) {
    while (ptr2 !== ptr1) {
      const firstPartition = arr.slice(0, ptr1);
      if (!firstPartition.length) {
        break;
      }
      const firstCount = reduceRemaining(firstPartition);

      const secondPartition = arr.slice(ptr1, ptr2);
      if (!secondPartition.length) {
        break;
      }
      const secondCount = reduceRemaining(secondPartition);

      const thirdPartition = arr.slice(ptr2);
      if (!thirdPartition.length) {
        break;
      }
      const thirdCount = reduceRemaining(thirdPartition);
      if (firstCount === secondCount && secondCount === thirdCount) {
        return true;
      }
      ptr2--;
    }
    ptr2 = arr.length - 1;
    ptr1++;
  }
  return false;
};
