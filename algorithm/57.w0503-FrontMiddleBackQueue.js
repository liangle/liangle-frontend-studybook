/**
 * [1670. 设计前中后队列](https://leetcode-cn.com/problems/design-front-middle-back-queue/)
 */
var FrontMiddleBackQueue = function () {
  this.queue = new Array()
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  this.queue.unshift(val)
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  let midIndex = Math.floor(this.queue.length / 2)

  //从中间添加一个元素
  this.queue.splice(midIndex, 0, val)
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.queue.push(val)
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  if (this.isEmpty()) return -1

  return this.queue.shift()
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  if (this.isEmpty()) return -1

  let midIndex = Math.floor(this.queue.length / 2)
  if (this.queue.length % 2 === 0) midIndex--

  //从中间移除一个元素
  return this.queue.splice(midIndex, 1)
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  if (this.isEmpty()) return -1

  return this.queue.pop()
};

/**
 * @return {boolean}
 */
FrontMiddleBackQueue.prototype.isEmpty = function () {
  //如果队列长度为0说明队列为空
  return this.queue.length === 0
};