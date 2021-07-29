const bubbleSort = (testCase) => {
  console.time('Time to execute-> ' + JSON.stringify(testCase));
  let result = testCase.slice(0);
  for (let i = 0; i < result.length - 1; i++) {
    let swapped = false;
     for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        swap(result, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped)  {
      break;
    };
  };

  console.timeEnd('Time to execute-> ' + JSON.stringify(testCase));
  return result;
};

const swap = (arr, leftIndex, rightIndex) => {
  let temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
  return arr;
}


// Tests
const testCases = [
  //Best Case Scenario (already sorted) O(n) Time Complexity->
  [1, 2, 3, 4, 5],
  // Avg Case Scenario->
  [1, 2, 4, 3, 5],
  //Worst Case Scenario O(n*n) Time Complexity->
  [5, 4, 3, 2, 1]
]

const testCaseResults = testCases.map((testCase) => {
  return bubbleSort(testCase);
});

const passing = testCaseResults.every((testCase) => {
  return ('[1,2,3,4,5]' === JSON.stringify(testCase))
});

console.log(passing === true ? 'passed bubble sort' : 'failed bubble sort');
