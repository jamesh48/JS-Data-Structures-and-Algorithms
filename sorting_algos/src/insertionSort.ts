const insertionSort = (testCase: number[]) => {
  // Copy the input as to not mutate it.
  let resultArr = testCase.slice(0);

  // Loop over the array starting at 1;
  for (let i = 1; i < resultArr.length; i++) {
    // Assign initial value for currentItem
    const currKey = resultArr[i];
    // And provisional value for j.
    let j = i - 1;

    // Sort resultArr[j] to the correct position going backwards.
    while (j >= 0 && resultArr[j] > currKey) {
      resultArr[j + 1] = resultArr[j];
      j--;
    }

    resultArr[j + 1] = currKey;
  }

  return resultArr;
};

export default insertionSort;
