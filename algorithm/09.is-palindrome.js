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

console.log(isPalindrome(121))
console.log(isPalindrome(10))
console.log(isPalindrome(-11))
console.log(isPalindrome(0))