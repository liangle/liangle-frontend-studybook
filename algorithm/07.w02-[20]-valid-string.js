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

  for (let char of str) {
    if (map.has(char)) { //右括号
      if (!stack.length || stack[stack.length - 1] !== map.get(char)) { //右括号和栈顶不匹配
        return false
      }
      stack.pop()
    } else { //左括号
      stack.push(char)
    }
  }

  //如果栈内没元素则校验成功
  return stack.length === 0
}

// const input = readline()
const input = '{}'
console.log(validString(input))