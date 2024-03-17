// Leet Code #771
// https://leetcode.com/problems/jewels-and-stones/

var numJewelsInStones = function(jewels, stones) {
    const stoneCandidates = stones.split('');
    const jewelCandidates = jewels.split('');
    
    return stoneCandidates.reduce((count, stone) => {
        if (jewelCandidates.includes(stone)) {
            count++;
        }
        return count;
    }, 0)
};
