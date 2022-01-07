// This solution finds the solution correctly but doesn't always find the first solution and also in the edge case of the args being [4, 4, 4, 4], 16 - fails.
// 1/3/22
function findArrayQuadruplet(arr, s) {
  // your code goes here

  arr.sort((a, b) => a - b);

  let hashed = {};

  for (let i = 0; i < arr.length; i++) {
    const first = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const second = arr[j];
      if (first + second > s) {
        break;
      }
      for (let x = j + 1; x < arr.length; x++) {
        const third = arr[x];
        const computed = first + second + third;
        if (computed > s) {
          break;
        }
        hashed[computed] = [first, second, third];
        if (hashed[s - computed]) {
          return hashed[computed].concat(s - computed);
        }
      }
    }
  }
  return [];
}

const result = findArrayQuadruplet([2, 7, 4, 0, 9, 5, 1, 3], 20);
console.log(result);
