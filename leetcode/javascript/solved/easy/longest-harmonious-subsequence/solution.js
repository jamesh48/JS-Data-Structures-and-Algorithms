var findLHS = function (nums) {
  nums.sort((a, b) => a - b);
  let slow = 0;
  let maxLen = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    while (nums[fast] - nums[slow] > 1) {
      slow++;
    }
    if (nums[fast] - nums[slow] === 1) {
      maxLen = Math.max(maxLen, fast - slow + 1);
    }
  }

  return maxLen;
};
