// Leetcode #1773
// https://leetcode.com/problems/count-items-matching-a-rule/

var countMatches = function(items, ruleKey, ruleValue) {
    const typeIndex = ruleKey === 'type' ? 0 : ruleKey === 'color' ? 1 : 2;
    return items.reduce((count, item, index) => {
            if (item[typeIndex] === ruleValue) {
             return count + 1;     
            }
        return count;
    }, 0);
};
