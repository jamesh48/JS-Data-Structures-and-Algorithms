// Leetcode #2011
// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

var finalValueAfterOperations = function(operations) {
    return operations.reduce((total, operation) => {
        return operation.indexOf('-') > -1 ? total - 1 : total + 1; 
    }, 0)
};
