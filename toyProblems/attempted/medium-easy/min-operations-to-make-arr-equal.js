// Leetcode #1551
// https://leetcode.com/problems/minimum-operations-to-make-array-equal/

var minOperations = function(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push((2 * i) + 1)
    }
    
    let count = 0;
    let x = 5;
    let y = 0;
    
    while (!arr.every((x) => x === n)) {
        arr[x]-=1;
        arr[y]+=1;    
        count++;
    }
    
    return count;
};
