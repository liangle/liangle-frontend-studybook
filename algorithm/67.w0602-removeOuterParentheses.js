/**
 * [1021. 删除最外层的括号](https://leetcode-cn.com/problems/remove-outermost-parentheses/)
 */
var removeOuterParentheses = function (s) {
  let res = ''
  let n = 0

  for (let c of s) {
    c === '(' ? n++ : n--
    if ((n === 1 && c === '(') || (n === 0 && c === ')')) continue
    res += c
  }

  return res
};