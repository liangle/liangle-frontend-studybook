/**
 * 面试题 17.14. 最小K个数 https://leetcode-cn.com/problems/smallest-k-lcci/
 */
var smallestK = function (arr, k) {
  if (k === 0) return []
  const maxQueue = new MaxPriorityQueue()

  arr.forEach(num => {
    if (maxQueue.size() < k) {
      maxQueue.enqueue(num)
    } else if (num < maxQueue.front()['priority']) {
      maxQueue.dequeue()
      maxQueue.enqueue(num)
    }
  })

  return maxQueue.toArray().map(item => item.element)
};

console.log(smallestK([1, 3, 5, 7, 2, 4, 6, 8]))