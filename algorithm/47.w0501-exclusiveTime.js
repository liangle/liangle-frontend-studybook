/**
 * [636. 函数的独占时间](https://leetcode-cn.com/problems/exclusive-time-of-functions/)
 * @param {*} preorder 
 */
function exclusiveTime(n, logs) {
  const res = new Array(n).fill(0)
  const stack = []
  let prevTime = 0

  logs.forEach(log => {
    const arr = log.split(':')
    const currTime = Number(arr[2])
    const offset = currTime - prevTime //计算当前日志和上次日志的便宜量
    prevTime = currTime

    if (arr[1] === 'start') {
      if (stack.length > 0) {
        //当前是start日志，栈不为空时栈顶也是start日志，更新上个日志已执行时间
        //偏移量就是上个日志中的函数已执行时间
        res[stack[stack.length - 1]] += offset
      }
      stack.push(Number(arr[0]))
    } else {
      res[Number(arr[0])] += offset + 1
      //遇到结束日志时，前一个日志时间后移一位
      //这样假设有两个相连的end日志时，后面的end日志的前一个时间是自己的开始时间
      prevTime++
      stack.pop()
    }
  })

  return res
}

console.log(exclusiveTime(1, ["0:start:0", "0:start:2", "0:end:5", "0:start:6", "0:end:6", "0:end:7"]))