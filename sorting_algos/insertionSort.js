const insertionSort = (testCase) => {
  console.time(`Execution Time-> ${JSON.stringify(testCase)}`);

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

  console.timeEnd(`Execution Time-> ${JSON.stringify(testCase)}`)
  return resultArr;
}

// Time Complexity- O(n ^ 2);
const testCases = [
  [1,2,3,4,5],
  [1,2,4,3,5],
  [5,4,3,2,1]
];

const testCaseResults = testCases.map((testCase) => {
  return insertionSort(testCase);
});

const passing = testCaseResults.every((testCase) => {
  return ('[1,2,3,4,5]' === JSON.stringify(testCase))
});

console.log(passing ? 'passed insertion sort' : 'failed insertion sort');