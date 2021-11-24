/**
 * [227. 基本计算器 II](https://leetcode-cn.com/problems/basic-calculator-ii/)
 * @param {*} preorder 
 */
function calculate(s) {
  s = s.trim()
  const len = s.length
  let num = 0 //存当前数字
  let preSign = '' //把前一个操作记下来
  let tmp
  const stack = []

  for (let i = 0; i < len; i++) {
    if (s[i] === ' ') continue

    tmp = Number(s[i])
    if (!isNaN(tmp)) {
      num = num * 10 + tmp
    }

    if (isNaN(tmp) || i === len - 1) {
      switch (preSign) {
        case '':
        case '+':
          stack.push(num)
          break
        case '-':
          stack.push(-num) //减法转化成加法
          break
        case '*':
          stack.push(stack.pop() * num)
          break
        case '/':
          stack.push(stack.pop() / num | 0)
          break
      }

      preSign = s[i]
      num = 0
    }
  }

  let res = 0
  while (stack.length) {
    res += stack.pop()
  }

  return res
}

console.log(calculate('10 + 10 / 2 - 5 * 9')) //-30