const swapItems = (testCase, leftIndex, rightIndex) => {
  let temp = testCase[leftIndex];
  testCase[leftIndex] = testCase[rightIndex];
  testCase[rightIndex] = temp;
};

const partition = (testCase, left, right) => {
  const pivot = testCase[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    // Increment over array until left element is greater than the pivot
    while (testCase[i] < pivot) {
      i++;
    }
    // Increment over array util the right element is less than the pivot
    while (testCase[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swapItems(testCase, i, j);
      i++;
      j--;
    }
  }
  return i;
};

const quickSort = (testCase, leftIndex, rightIndex) => {
  let i;
  if (testCase.length > 1) {
    const index = partition(testCase, leftIndex, rightIndex);
    if (leftIndex < index - 1) {
      quickSort(testCase, leftIndex, index - 1);
    }

    if (rightIndex > index) {
      quickSort(testCase, index, rightIndex);
    }
  }
  return testCase;
};

const testCases = [
  [2, 5, 3, 4, 1],
  [1, 2, 3, 4, 5],
  [1, 2, 4, 3, 5],
  [5, 4, 3, 2, 1]
];

const testCaseResults = testCases.map((testCase) => {
  return quickSort(testCase, 0, testCase.length - 1);
});

const passing = testCaseResults.every((testCase) => {
  return ('[1,2,3,4,5]' === JSON.stringify(testCase))
});

console.log(passing ? 'passed quick sort' : 'failed quick sort');
