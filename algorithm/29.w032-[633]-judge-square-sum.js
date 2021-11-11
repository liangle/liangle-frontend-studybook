/**
 * [633. 平方数之和](https://leetcode-cn.com/problems/sum-of-square-numbers/)
 * @param {*} c 
 */
function judgeSquareSum(c) {
  //a^2 + b^2 = c
  for (let a = 0; a * a <= c; a++) {
    if (Math.sqrt(c - a * a).toString().indexOf('.') === -1)
      return true
  }

  return false
}

console.log(judgeSquareSum(2))