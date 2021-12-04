/**
 * [682. 棒球比赛](https://leetcode-cn.com/problems/baseball-game/)
 */
var calPoints = function (ops) {
  const stack = []
  ops.forEach(item => {
    if (isNaN(Number(item))) {
      if (item === 'C') {
        stack.pop()
      } else if (item === 'D') {
        stack.push(stack[stack.length - 1] * 2)
      } else if (item === '+') {
        stack.push(stack[stack.length - 1] + stack[stack.length - 2])
      }
    } else {
      stack.push(Number(item))
    }
  })

  return stack.reduce((prev, curr) => prev + curr)
};