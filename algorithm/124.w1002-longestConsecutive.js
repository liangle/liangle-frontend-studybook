/**
 * 128. 最长连续序列  https://leetcode-cn.com/problems/longest-consecutive-sequence
 */
var longestConsecutive = function (nums) {
  const len = nums.length
  if (len <= 1) return len

  //先去重再排序
  nums = [...new Set(nums)].sort((a, b) => a - b)

  let start = 0
  let ans = 0

  for (let i = 1; i < len; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      ans = Math.max(ans, i - start + 1)
    } else {
      ans = Math.max(ans, i - start)
      //如果前后数组不是递增，则更新开始位置
      start = i
    }
  }

  return ans
};

const arr = [1, 2, 0, 1]
console.log(longestConsecutive(arr))