// Leetcode #345
// https://leetcode.com/problems/reverse-vowels-of-a-string/

const reverseVowels = function(s) {
    const vowelEntries = s.split('').reduce((total, item, index) => {
        const x = item.toLowerCase();
        if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
            total[0].push(item);
            total[1].push(index);
        } 
        return total;
    }, [[], []])
    
    const reversed = vowelEntries[0].sort(() => -1);
    const originalOrder = vowelEntries[1];
    
    const splitStr = s.split('');
    
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[originalOrder[i]] = reversed[i];
    }

    return splitStr.join('');
};
