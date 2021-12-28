/**
 * [451. 根据字符出现频率排序](https://leetcode-cn.com/problems/sort-characters-by-frequency/)
 */
var frequencySort = function (s) {
  const map = new Map()
  for (const c of s) {
    map.set(c, map.has(c) ? map.get(c) + 1 : 1)
  }

  const maxQueue = new MaxPriorityQueue()
  for ([key, value] of map) {
    maxQueue.enqueue(key, value)
  }

  const ans = []
  while (!maxQueue.isEmpty()) {
    let {
      element,
      priority
    } = maxQueue.dequeue()
    while (priority--) {
      ans.push(element)
    }
  }
  return ans.join('')
};