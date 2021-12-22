/**
 * [264. 丑数 II](https://leetcode-cn.com/problems/ugly-number-ii/submissions/)
 */
var nthUglyNumber = function (n) {
  let p2 = p3 = p5 = 1
  const dp = [0, 1]

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5)

    if (dp[i] === dp[p2] * 2) p2++
    if (dp[i] === dp[p3] * 3) p3++
    if (dp[i] === dp[p5] * 5) p5++
  }

  return dp[n]
};

console.log(nthUglyNumber(11))