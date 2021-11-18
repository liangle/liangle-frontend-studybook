/**
 * [746. 使用最小花费爬楼梯](https://leetcode-cn.com/problems/min-cost-climbing-stairs/)
 * @param {*} cost 
 */
function minCostClimbingStairs(cost) {
  //递推公式：dp[i] = Math.min(dp[n - 1] + cost[n], dp[n - 2] + cost[n])

  const n = cost.length
  const dp = new Array(n + 1)
  dp[0] = dp[1] = 0

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }

  return dp[n]
}

console.log(minCostClimbingStairs([10, 15, 20]))