/**
 * [20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)
 * @param {*} str 
 * @returns 
 */
function validString(str) {
  const stack = []

  //存入能够入栈的元素
  const map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])

  for (let c of str) {
    if (map.has(c)) { //右括号
      //右括号和栈顶不匹配
      if (!stack.length || stack[stack.length - 1] !== map.get(c)) return false

      stack.pop()
    } else { //左括号
      stack.push(c)
    }
  }

  //如果栈内没元素则校验成功
  return stack.length === 0
}

// const input = readline()
const input = '{}'
console.log(validString(input))