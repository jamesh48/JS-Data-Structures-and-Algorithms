/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      if (nums[i] % 2 === 0) {
        continue;
      } else {
        // Find even number
        let swapIndex = i;
        while (nums[swapIndex] % 2 !== 0) {
          swapIndex++;
        }
        const temp = nums[swapIndex];
        nums[swapIndex] = nums[i];
        nums[i] = temp;
      }
    } else {
      if (nums[i] % 2 !== 0) {
        continue;
      } else {
        //Find Odd Number
        let swapIndex = i;
        while (nums[swapIndex] % 2 === 0) {
          swapIndex++;
        }
        const temp = nums[swapIndex];
        nums[swapIndex] = nums[i];
        nums[i] = temp;
      }
    }
  }
  return nums;
};
