// Leetcode 1323
// https://leetcode.com/problems/maximum-69-number/

// 12/22/21
var maximum69Number  = function(num) {
    const resultsArr = [num];
    
    const numArr = num.toString().split('').map((x) => Number(x));
    
    for (let a = 0; a < numArr.length; a++) {
        const testArr = numArr.slice();
        for (let i = 0; i < testArr.length; i++) {
            if (a === i) {
                if (testArr[i] === 6) {
                    testArr[i] = 9;
                } else {
                    testArr[i] = 6
                }
                resultsArr.push(Number(testArr.join('')));
                break;
            }

        }
    }
    return Math.max(...resultsArr);
 };
