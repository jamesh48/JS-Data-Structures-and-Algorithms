var canThreePartsEqualSum = function (arr) {
  const reduced = arr.reduce((total, item) => total + item, 0);
  if (reduced % 3 !== 0) return false;

  let partitionSum = 0;
  let partitionCount = 0;
  let targetSum = reduced / 3;
  for (let i = 0; i < arr.length; i++) {
    partitionSum += arr[i];
    if (partitionSum === targetSum) {
      partitionCount = partitionCount + 1;
      partitionSum = 0;
    }
  }

  return partitionCount >= 3;
};
