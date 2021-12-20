/**
 * [355. 设计推特](https://leetcode-cn.com/problems/design-twitter/)
 */
var MedianFinder = function () {
  this.minQueue = new MaxPriorityQueue() //3,2,1
  this.maxQueue = new MinPriorityQueue() //4,5
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.minQueue.isEmpty() || num <= this.minQueue.front()['priority']) {
    this.minQueue.enqueue(num)
    if (this.minQueue.size() - this.maxQueue.size() > 1) {
      this.maxQueue.enqueue(this.minQueue.dequeue()['priority'])
    }
  } else {
    this.maxQueue.enqueue(num)
    if (this.maxQueue.size() > this.minQueue.size()) {
      this.minQueue.enqueue(this.maxQueue.dequeue()['priority'])
    }
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.minQueue.size() > this.maxQueue.size()) {
    return this.minQueue.front()['priority']
  }
  return (this.minQueue.back()['priority'] + this.maxQueue.front()['priority']) / 2
};