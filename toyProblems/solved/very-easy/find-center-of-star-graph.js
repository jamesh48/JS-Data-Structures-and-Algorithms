// Leetcode #1791
// https://leetcode.com/problems/find-center-of-star-graph/

// 12/21/21
var findCenter = function(edges) {
    return [...edges[0], ...edges[1]].filter((x, i, a) => a.indexOf(x) !== i) 
};
