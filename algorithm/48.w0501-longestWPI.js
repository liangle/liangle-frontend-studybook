/**
 * [1124. 表现良好的最长时间段](https://leetcode-cn.com/problems/longest-well-performing-interval/)
 * @param {*} preorder 
 */
function longestWPI(hours) {
  const score = []
  const len = hours.length

  //大于8小时的计为1，否则计为-1
  for (let i = 0; i < len; i++) {
    score[i] = hours[i] > 8 ? 1 : -1
  }

  //计算前缀和
  const presum = [0]
  for (let i = 1; i <= len; i++) {
    presum[i] = presum[i - 1] + score[i - 1]
  }

  const stack = [0]
  const stackTop = () => stack[stack.length - 1]

  //生成单调栈
  for (let i = 1; i < len; i++) {
    if (presum[stackTop()] > presum[i])
      stack.push(i)
  }

  let ans = 0
  let i = len
  while (i > 0) {
    while (stack.length > 0 && presum[stackTop()] < presum[i]) {
      ans = Math.max(ans, i - stackTop())
      stack.pop()
    }
    i--
  }

  return ans
}

console.log(longestWPI([9, 9, 6, 0, 6, 6, 9]))