// Leet Code #5128
// https://leetcode.com/problems/shuffle-string/

var restoreString = function(s, indices) {
    let obj = {};
    
    for (let i = 0; i < indices.length; i++) {
        obj[indices[i]] = s[i];
    }
    
    return Object.values(obj).join('') 
};
