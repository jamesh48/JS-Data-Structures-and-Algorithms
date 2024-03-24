//https://leetcode.com/problems/find-words-that-can-be-formed-by-characters
// Leetcode #1160

var countCharacters = function(words, chars) {
    return words.reduce((total, word) => {
        const splitWord = word.split('').filter((x, index, arr) => arr.indexOf(x) === index);
        const splitChars = chars.split('').filter((x, index, arr) => arr.indexOf(x) === index);
        
        if (splitWord.every((char) => splitChars.includes(char))) {
            total += word.length;
        }
        return total;
    }, 0)    
};
