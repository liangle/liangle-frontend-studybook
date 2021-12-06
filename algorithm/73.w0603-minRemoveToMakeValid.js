/**
 * [1249. 移除无效的括号](https://leetcode-cn.com/problems/minimum-remove-to-make-valid-parentheses/)
 * @param {*} head 
 * @param {*} cachedNode 
 * @returns 
 */
var minRemoveToMakeValid = function (s) {
  const stack = []
  let removeIndexs = []
  const len = s.length

  for (let i = 0; i < len; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else if (s[i] === ')') {
      if (stack.length === 0) {
        removeIndexs.push(i)
      } else {
        stack.pop()
      }
    }
  }

  removeIndexs = removeIndexs.concat(stack)
  let ans = ''

  for (let i = 0; i < len; i++) {
    if (removeIndexs.includes(i)) continue
    ans += s[i]
  }

  return ans
};