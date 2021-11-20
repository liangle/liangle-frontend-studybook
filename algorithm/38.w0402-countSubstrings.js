/**
 * [647. 回文子串](https://leetcode-cn.com/problems/palindromic-substrings/)
 * @param {*} s 
 */
function countSubstrings(s) {
  let res = 0
  const len = s.length
  const dp = new Array(len).fill([]).map(() => new Array(len).fill(0))

  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= i; j++) {
      if (s[i] === s[j] && (i - j <= 1 || dp[i - 1][j + 1])) {
        dp[i][j] = true
        res++
      }
    }
  }

  return res
}

console.log(countSubstrings('aaa')) //6
console.log(countSubstrings('fdsklf')) //6
console.log(countSubstrings('akfaf')) //6
console.log(countSubstrings('level')) //6