/**
 * [844. 比较含退格的字符串](https://leetcode-cn.com/problems/backspace-string-compare/)
 * @param {*} tasks 
 * @param {*} n 
 * @returns 
 */

var backspaceCompare = function (s, t) {
  return convertString(s) === convertString(t)
};

var convertString = function (s) {
  let stack = []
  for (let c of s) {
    if (c === '#') {
      stack.pop()
    } else {
      stack.push(c)
    }
  }

  return stack.join('')
}