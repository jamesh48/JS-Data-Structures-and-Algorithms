// Leetcode #1365
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

// 1/3/2022

class Solution {

  public int[] smallerNumbersThanCurrent(int[] nums) {
    int[] resultNums = new int[nums.length];
    for (int i = 0; i < nums.length; i++) {
      resultNums[i] = 0;
      for (int j = 0; j < nums.length; j++) {
        if (j != i && nums[i] > nums[j]) {
          resultNums[i]++;
        }
      }
    }
    return resultNums;
  }
}
