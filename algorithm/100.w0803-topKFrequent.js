/**
 * [692. 前K个高频单词](https://leetcode-cn.com/problems/top-k-frequent-words/submissions/)
 */
var topKFrequent = function (words, k) {
  const map = new Map()
  const ans = []

  words.forEach(word => {
    if (!map.has(word)) {
      map.set(word, 0)
      ans.push(word)
    }
    map.set(word, map.get(word) + 1)
  })

  ans.sort((a, b) => {
    //单词按数量倒序，数量一样时按字母排序
    return map.get(a) === map.get(b) ? a.localeCompare(b) : map.get(b) - map.get(a)
  })

  return ans.slice(0, k)
};