const bubbleSort = (testCase: number[]) => {
  let result = testCase.slice(0);
  for (let i = 0; i < result.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        swap(result, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return result;
};

const swap = (arr: number[], leftIndex: number, rightIndex: number) => {
  let temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
  return arr;
};

export default bubbleSort;
