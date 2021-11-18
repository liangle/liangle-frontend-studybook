/**
 * [121. 买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/submissions/)
 * @param {*} prices 
 * @returns 
 */
function maxProfit(prices) {
  //如果只能操作一次，在最低买入，最高抛出
  let min = Number.MAX_SAFE_INTEGER
  let maxProfit = 0
  const len = prices.length

  for (let i = 0; i < len; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - min)
    }
  }

  return maxProfit
}