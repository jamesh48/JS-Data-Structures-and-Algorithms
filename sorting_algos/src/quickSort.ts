const swapItems = (
  testCase: number[],
  leftIndex: number,
  rightIndex: number
) => {
  let temp = testCase[leftIndex];
  testCase[leftIndex] = testCase[rightIndex];
  testCase[rightIndex] = temp;
};

const partition = (testCase: number[], left: number, right: number) => {
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

const quickSort = (
  testCase: number[],
  leftIndex: number,
  rightIndex: number
) => {
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

export default quickSort;
