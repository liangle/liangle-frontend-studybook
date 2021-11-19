/**
 * [647. 回文子串](https://leetcode-cn.com/problems/palindromic-substrings/)
 * @param {*} s 
 */
function countSubstrings(s) {
  let ans = 0
  const len = s.length
  const dp = new Array(len).fill([])
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false)
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= i; j++) {
      if (s[i] === s[j] && (i - j < 2 || dp[j + 1][i - 1])) {
        dp[j][i] = true
        ans++
      }
    }
  }

  return ans
}

// console.log(countSubstrings('aaa'))
console.log(countSubstrings('fdsklf'))