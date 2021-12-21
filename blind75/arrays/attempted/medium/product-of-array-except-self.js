// Leetcode #238
// https://leetcode.com/problems/product-of-array-except-self/


var productExceptSelf = function(nums) {
  return nums.reduce((total, num, index, arr) => {
        total.push(nums.reduce((multiplied, remainingNum) => {
            if (remainingNum !== num) {
                return multiplied * remainingNum;    
            }
            return multiplied;
        }))
      return total;
  }, [])  
};
