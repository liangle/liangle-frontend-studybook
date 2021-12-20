/**
 * [数组中的第 K 个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)
 */
var findKthLargest = function (nums, k) {
  const pq = new MinPriorityQueue()

  nums.forEach(num => pq.enqueue(num))
  while (pq.size() > k) pq.dequeue()

  return pq.dequeue()['priority']
};