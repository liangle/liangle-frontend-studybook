/**
 * [剑指 Offer II 095. 最长公共子序列](https://leetcode-cn.com/problems/qJnOS7/)
 * @param {*} text1 
 * @param {*} text2 
 */
function longestCommonSubsequence(text1, text2) {
  let {
    longString,
    shortString
  } = text1.length > text2.length ?
    {
      longString: text1,
      shortString: text2
    } : {
      shortString: text2,
      longString: text1
    }

  let maxLen = 0
  let count = 0
  let prevIndex = 0
  const llen = longString.length
  const slen = shortString.length

  for (let n = 0; n < llen; n++) {
    prevIndex = 0
    count = 0
    //短的字符串去长的字符串中匹配
    for (let i = n; i < llen; i++) {
      for (let j = prevIndex; j < slen; j++) {
        if (longString[i] === shortString[j]) {
          prevIndex = j //记录找到的位置，下个字符从找到的位置开始找
          count++
          break
        }
      }
    }

    maxLen = Math.max(count, maxLen)
  }

  return maxLen
}