/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l = 0, r = 1, maxProfit = 0

    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            maxProfit = prices[r] - prices[l] > maxProfit ? maxProfit = prices[r] - prices[l] : maxProfit
        } else l = r
        r++
    }
    return maxProfit
};