/**
 * [641. 设计循环双端队列](https://leetcode-cn.com/problems/design-circular-deque/)
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.deque = new Array()
  this.capacity = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false

  //通过unshift在头部加入元素
  this.deque.unshift(value)
  return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false

  //通过push在队列尾部添加元素
  this.deque.push(value)
  return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false

  //通过shift删除数组第一个元素
  this.deque.shift()
  return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false

  //通过pop方法删除最后一个元素
  this.deque.pop()
  return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1

  //返回队列第一个元素
  return this.deque[0]
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1

  //返回队列最后一个元素
  return this.deque[this.deque.length - 1]
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  //如果队列长度为0说明队列为空
  return this.deque.length === 0
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  //如果队列长度等于最大容量，说明队列已满
  return this.deque.length === this.capacity
};