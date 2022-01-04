// Leetcode #1528
// https://leetcode.com/problems/shuffle-string/

// 1/3/2022

class Solution {

  public String restoreString(String s, int[] indices) {
    String[] resultArr = new String[indices.length];
    String[] arrOfStrs = new String[indices.length];
    arrOfStrs = s.split("", 0);

    for (int i = 0; i < indices.length; i++) {
      resultArr[indices[i]] = arrOfStrs[i];
    }

    String resultStr = String.join("", resultArr);
    return resultStr;
  }
}
