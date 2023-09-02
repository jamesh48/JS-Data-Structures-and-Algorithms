import { iCantBelieveItCanSort, bubbleSort, insertionSort } from './index';

/* Test Cases */
const testCases = [
  {
    identifier: '(best case, already sorted)',
    input: [1, 2, 3, 4, 5],
    expectedResult: [1, 2, 3, 4, 5],
  },
  {
    identifier: '(avg case)',
    input: [1, 2, 3, 4, 5],
    expectedResult: [1, 2, 3, 4, 5],
  },
  {
    identifier: '(worse case)',
    input: [5, 4, 3, 2, 1],
    expectedResult: [1, 2, 3, 4, 5],
  },
];

/* Tests */

describe("I can't believe it can sort", () => {
  const testIdentifier = "I can't believe it can sort";
  testCases.forEach((testCase) => {
    test(`${testIdentifier} ${testCase.identifier}`, () => {
      const result = iCantBelieveItCanSort(testCase.input);
      expect(result).toEqual(testCase.expectedResult);
    });
  });
});

describe('Bubble Sort', () => {
  const testIdentifier = 'Insertion Sort';
  testCases.forEach((testCase) => {
    test(`${testIdentifier} ${testCase.identifier}`, () => {
      const result = bubbleSort(testCase.input);
      expect(result).toEqual(testCase.expectedResult);
    });
  });
});

describe('Insertion Sort', () => {
  const testIdentifier = 'Bubble Sort';
  testCases.forEach((testCase) => {
    test(`${testIdentifier} ${testCase.identifier}`, () => {
      const result = insertionSort(testCase.input);
      expect(result).toEqual(testCase.expectedResult);
    });
  });
});
