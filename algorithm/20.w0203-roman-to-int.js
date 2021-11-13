/**
 * [13. 罗马数字转整数](https://leetcode-cn.com/problems/roman-to-integer/)
 * @param {*} s 
 * @returns 
 */
function romanToInt(s) {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  }

  let ret = 0

  for (let i = 0, len = s.length; i < len; i++) {
    if (i < len - 1 && map[s[i] + s[i + 1]]) { //检查下一个字符能不能和当前字符组成特殊情况数字
      ret += map[s[i] + s[i + 1]]
      i++
    } else {
      ret += map[s[i]]
    }
  }

  return ret
}