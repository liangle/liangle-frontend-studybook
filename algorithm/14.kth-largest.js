/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k
  this.nums = nums
}

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  //思路
  //1.先添加再排序
  //2.排序后只保留前k位数字
  //3.返回第k位

  this.nums.push(val)
  this.nums.sort((a, b) => {
    return b - a
  })

  while (this.nums.length > this.k) {
    this.nums.pop()
  }

  return this.nums[this.k - 1]
}

const arr = [4, 5, 8, 2]
const kthLargest = new KthLargest(3, arr)
console.log(kthLargest.add(3))
console.log(kthLargest.add(5))
console.log(kthLargest.add(10))
console.log(kthLargest.add(9))
console.log(kthLargest.add(4))