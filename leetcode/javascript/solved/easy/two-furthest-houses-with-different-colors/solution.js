/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  let maxDistance = 0;
  for (let i = 0; i < colors.length; i++) {
    const currentHouse = colors[i];
    for (let j = i + 1; j < colors.length; j++) {
      const testHouse = colors[j];
      const currentDistance = Math.abs(j - i);
      if (testHouse !== currentHouse && currentDistance > maxDistance) {
        maxDistance = currentDistance;
      }
    }
  }
  return maxDistance;
};
