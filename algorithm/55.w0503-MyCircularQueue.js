/**
 * [622. 设计循环队列](https://leetcode-cn.com/problems/design-circular-queue/)
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.queue = new Array(k)
  this.capacity = k
  this.count = 0
  this.headIndex = 0
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false

  this.queue[(this.headIndex + this.count) % this.capacity] = value
  this.count++
  return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false

  this.queue[this.headIndex] = null
  this.headIndex++
  this.headIndex = this.headIndex % this.capacity
  this.count--
  return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1
  return this.queue[this.headIndex]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1
  return this.queue[(this.headIndex + this.count - 1) % this.capacity]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.count === 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.capacity === this.count
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */