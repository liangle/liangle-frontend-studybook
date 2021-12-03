/**
 * [面试题 03.04. 化栈为队](https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/)
 */
var MyQueue = function () {
  this.inStack = new Array()
  this.outStack = new Array()
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.outStack.length === 0) {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop())
    }
  }

  return this.outStack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.outStack.length > 0)
    return this.outStack[this.outStack.length - 1]
  else if (this.inStack.length > 0)
    return this.inStack[0]
  else
    return -1

};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.inStack.length === 0 && this.outStack.length === 0
};