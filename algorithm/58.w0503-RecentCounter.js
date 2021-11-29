/**
 * [933. 最近的请求次数](https://leetcode-cn.com/problems/number-of-recent-calls/submissions/)
 */
var RecentCounter = function () {
  this.queue = new Array()
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t)
  while (this.queue.length && this.queue[0] < t - 3000) {
    this.queue.shift()
  }
  return this.queue.length
};