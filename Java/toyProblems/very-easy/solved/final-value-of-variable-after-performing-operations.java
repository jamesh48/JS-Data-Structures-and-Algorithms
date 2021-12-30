// Leetcode 2011
// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

// 12/30/21

class Solution {

  public int finalValueAfterOperations(String[] operations) {
    int x = 0;

    for (int i = 0; i < operations.length; i++) {
      if (operations[i].equals("--X") || operations[i].equals("X--")) {
        x = x - 1;
      } else {
        x = x + 1;
      }
    }
    return x;
  }
}
