// Leetcode #1281
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

//12/22/21, split and reduce route
const subtractProductAndSum = function(n) {
    
    const numberArr = n.toString().split('').map((x) => Number(x));
    
    const product = numberArr.reduce((total, item) => {
        return total * item;
    }, 1);
    
    const sum = numberArr.reduce((total, item) => {
        return total + item;
    }, 0);
    
    return product - sum;
};
