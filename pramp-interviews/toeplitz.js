// 1/3/2022
function isToeplitz(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === 0 && j === arr[i].length - 1) {
        continue;
      }
      if (i === arr.length - 1 && j === 0) {
        continue;
      }
      if (
        arr[i + 1] &&
        typeof arr[i + 1][j + 1] === "number" &&
        arr[i][j] !== arr[i + 1][j + 1]
      ) {
        return false;
      }
    }
  }
  return true;
}

const trueResult = isToeplitz([
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [7, 5, 1, 2]
]);

const falseResult = isToeplitz([
  [1, 2, 3, 4],
  [5, 1, 9, 3],
  [6, 5, 1, 2]
]);

// Tests
console.log("should be true-> ", trueResult);
console.log("should be false-> ", falseResult);
