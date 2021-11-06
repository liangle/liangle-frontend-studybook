/**
 * [翻转字符串](https://leetcode-cn.com/problems/reverse-string/)
 * @param {*} s 
 */
function reverseString(s) {
  for (let i = 0, len = s.length; i < Math.floor(len / 2); i++) {
    [s[i], s[len - 1 - i]] = [s[len - 1 - i], s[i]]
  }

  return s
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))