/**
 * [1046. 最后一块石头的重量](https://leetcode-cn.com/problems/last-stone-weight/)
 * @param {*} root 
 * @returns 
 */
var lastStoneWeight = function (stones) {
  const pq = new MaxPriorityQueue()
  stones.forEach(stone => {
    pq.enqueue(stone)
  })

  while (pq.size() > 1) {
    const a = pq.dequeue()['priority']
    const b = pq.dequeue()['priority']
    if (a > b) pq.enqueue(a - b)
  }
  return pq.isEmpty() ? 0 : pq.dequeue()['priority']
};