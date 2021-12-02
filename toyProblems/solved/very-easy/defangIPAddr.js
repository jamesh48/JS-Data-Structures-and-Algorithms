// Leet Code
// https://leetcode.com/problems/defanging-an-ip-address/

var defangIPaddr = function(address) {
    return address.split('').map((x) => {
        if (x === '.') {
            return '[.]';
        }
        return x;
    } ).join('');
};
