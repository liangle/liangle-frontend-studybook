/**
 * [973. 最接近原点的 K 个点](https://leetcode-cn.com/problems/k-closest-points-to-origin/)
 */
var kClosest = function (points, k) {
  const maxQueue = new MaxPriorityQueue()
  points.forEach(point => {
    const [a, b] = point
    const distance = Math.sqrt(a * a + b * b)

    if (maxQueue.size() < k) {
      maxQueue.enqueue(point, distance)
    } else {
      if (distance < maxQueue.front()['priority']) {
        maxQueue.dequeue()
        maxQueue.enqueue(point, distance)
      }
    }
  })

  const ans = []
  while (!maxQueue.isEmpty()) {
    ans.push(maxQueue.dequeue()['element'])
  }
  return ans
};