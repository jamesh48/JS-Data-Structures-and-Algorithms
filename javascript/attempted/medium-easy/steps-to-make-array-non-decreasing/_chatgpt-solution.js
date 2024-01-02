/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function (nums) {
  let count = 0;

  while (true) {
    let modified = false;

    for (let i = 1; i < nums.length; i++) {
      if (nums[i - 1] > nums[i]) {
        // Remove elements that violate the non-decreasing condition
        nums.splice(i - 1, 1);
        modified = true;
        break; // Break after removing one element to recheck the array
      }
    }

    if (!modified) {
      // If no modification was made, the array is non-decreasing
      break;
    }

    count++;
  }

  return count;
};
