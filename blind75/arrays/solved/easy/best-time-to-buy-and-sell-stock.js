// Need To Review!
// Leetcode #121
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

var maxProfit = function(prices) {
    let minPrice = Infinity;
    let bestProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        } else if (prices[i] - minPrice > bestProfit) {
            bestProfit = prices[i] - minPrice;
        }
    }
    
    return bestProfit;
};    
