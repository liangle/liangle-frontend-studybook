/**
 * [347. 前 K 个高频元素](https://leetcode-cn.com/problems/top-k-frequent-elements/)
 */
var topKFrequent = function (nums, k) {
  const map = new Map()
  nums.forEach(num => {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1)
  })

  const minQueue = new MinPriorityQueue()
  for ([key, value] of map) {
    if (minQueue.size() < k) {
      minQueue.enqueue(key, value)
    } else {
      if (minQueue.front()['priority'] < value) {
        minQueue.dequeue()
        minQueue.enqueue(key, value)
      }
    }
  }

  return minQueue.toArray().map(item => item.element)
};