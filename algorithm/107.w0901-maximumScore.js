/**
 * [1753. 移除石子的最大得分](https://leetcode-cn.com/problems/maximum-score-from-removing-stones/submissions/)
 */
var maximumScore = function (a, b, c) {
  [a, b, c] = ([a, b, c].sort((a, b) => a - b))
  return (a + b <= c) ? (a + b) : Math.floor((a + b + c) / 2)
};