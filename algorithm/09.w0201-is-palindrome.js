/**
 * 判断数字是否为回文数
 * @param {*} num 
 * @returns 
 */
function isPalindrome(num) {
  if (num < 0) return false

  const str = num.toString()
  for (let i = 0, len = str.length; i < len / 2; i++) { //判断首位两个位置是否相等
    if (str[i] !== str[len - 1 - i]) return false
  }

  return true
}

/**
 * [9. 回文数](https://leetcode-cn.com/problems/palindrome-number/)
 * @param {*} num 
 * @returns 
 */
function isPalindrome2(num) {
  if (num < 0) return false

  let tmp = num
  let copy = 0 //把数组从后往左拷贝一份
  while (tmp > 0) {
    copy = copy * 10 + tmp % 10
    tmp = Math.floor(tmp / 10) //通过除10去掉最后一位
  }

  return copy === num
}

console.log(isPalindrome(121))
console.log(isPalindrome(10))
console.log(isPalindrome(-11))
console.log(isPalindrome(0))

console.log(isPalindrome2(121))
console.log(isPalindrome2(10))
console.log(isPalindrome2(-11))
console.log(isPalindrome2(0))