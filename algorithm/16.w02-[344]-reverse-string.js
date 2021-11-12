/**
 * [344. 反转字符串](https://leetcode-cn.com/problems/reverse-string/)
 * @param {*} s 
 */
function reverseString(s) {
  let l = 0
  let r = s.length - 1

  while (l <= r) { //左右调换位置，并且指针同时向中间靠拢
    [s[l++], s[r--]] = [s[r], s[l]]
  }

  return s
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))