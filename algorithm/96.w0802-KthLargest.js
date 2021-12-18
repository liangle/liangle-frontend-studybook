/**
 * [703. 数据流中的第 K 大元素](https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/)
 * @param {*} root 
 * @returns 
 */
var KthLargest = function (k, nums) {
  this.nums = nums
  this.k = k
}

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.nums.push(val)
  this.nums.sort((a, b) => a - b)

  while (this.nums.length > this.k) {
    this.nums.shift()
  }

  return this.nums[0]
}