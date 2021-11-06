/**
 * [20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)
 * @param {*} str 
 * @returns 
 */
function validString(str) {
  const stack = []

  //存入能够入栈的元素
  const map = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  for (let char of str) {
    if (stack.length === 0) {
      if (map[char]) return false //如果栈里面没有字符时，出现反括号则错误
      stack.push(char)
    } else { //取栈顶字符，判断是否与当前字符匹配
      let tmp = stack.pop()
      if (tmp !== map[char]) return false
    }
  }

  //如果栈内没元素则校验成功
  return stack.length === 0
}

// const input = readline()
const input = '[]'
console.log(validString(input))