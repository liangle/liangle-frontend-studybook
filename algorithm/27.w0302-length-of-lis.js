/**
 * [300. 最长递增子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/)
 * @param {*} nums 
 */
function lengthOfLIS(nums) {
  if (!nums || nums.length === 0) return 0

  let res = 1
  let dp = new Array(nums.length + 1).fill(1)

  for (let i = 1, len = nums.length; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    res = Math.max(res, dp[i])
  }

  return res
}