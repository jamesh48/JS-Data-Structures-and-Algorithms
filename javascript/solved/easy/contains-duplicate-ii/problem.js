var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(i - j) <= k) {
        if (nums[i] === nums[j]) {
          return true;
        }
      } else {
        break;
      }
    }
  }
  return false;
};
