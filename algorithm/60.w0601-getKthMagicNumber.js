/**
 * [面试题 17.09. 第 k 个数](https://leetcode-cn.com/problems/get-kth-magic-number-lcci/)
 * @param {*} k 
 * @returns 
 */
var getKthMagicNumber = function (k) {
  // 生成k个素因子
  let p3 = p5 = p7 = 0
  const dp = [1]

  for (let i = 1; i < k; i++) {
    dp[i] = Math.min(dp[p3] * 3, dp[p5] * 5, dp[p7] * 7)

    if (dp[i] === dp[p3] * 3) p3++
    if (dp[i] === dp[p5] * 5) p5++
    if (dp[i] === dp[p7] * 7) p7++
  }

  return dp[k - 1]
};

console.log(getKthMagicNumber(251))