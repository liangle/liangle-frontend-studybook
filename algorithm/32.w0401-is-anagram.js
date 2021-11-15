/**
 * [242. 有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/description/)
 */
function isAnagram(s, t) {
  const sMap = new Map()
  const tMap = new Map()

  for (let char of s) {
    sMap.set(char, sMap.has(char) ? sMap.get(char) + 1 : 1)
  }

  for (let char of t) {
    tMap.set(char, tMap.has(char) ? tMap.get(char) + 1 : 1)
  }

  if (sMap.size !== tMap.size) return false

  for (let [key, value] of sMap) {
    if (tMap.get(key) !== value) return false
  }

  return true
}

console.log(isAnagram('abc', 'cba'))