/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let start = prices[0];
  for (let i = 1; i < prices.length; i++) {
    let potentialProfit = prices[i] - start;
    if (potentialProfit < 0) {
      start = prices[i];
    } else if (potentialProfit > profit) {
      profit = potentialProfit;
    }
  }
  return profit;
};
