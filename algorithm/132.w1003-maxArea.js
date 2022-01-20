/**
 * 688. 盛最多水的容器 https://leetcode-cn.com/problems/container-with-most-water
 */
var maxArea = function (height) {
  let l = 0
  let r = height.length - 1
  let max = 0

  while (l < r) {
    // const short = height[l] < height[r] ? l++ : r--
    max = Math.max(max, (r - l) * height[height[l] < height[r] ? l++ : r--])
  }

  return max
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))