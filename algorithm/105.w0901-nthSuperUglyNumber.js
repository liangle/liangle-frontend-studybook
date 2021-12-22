/**
 * [313. 超级丑数](https://leetcode-cn.com/problems/super-ugly-number/)
 */
var nthSuperUglyNumber = function (n, primes) {
  const dp = [0];
  const len = primes.length
  const p = new Array(len).fill(0)
  const nums = new Array(len).fill(1)

  for (let i = 1; i <= n; i++) {
    dp[i] = Math.min(...nums)

    for (let j = 0; j < len; j++) {
      if (dp[i] === nums[j]) {
        p[j]++
        nums[j] = dp[p[j]] * primes[j]
      }
    }
  }

  return dp[n]
};

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]))