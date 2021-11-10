/**
 * [二分查找](https://leetcode-cn.com/problems/binary-search)
 * @param {*} nums 
 * @param {*} target 
 */
function search(nums, target) {
  let l = 0
  let r = nums.length - 1
  let mid

  while (l <= r) {
    mid = Math.floor((l + r) / 2)

    if (target < nums[mid]) { //在左边找
      r = mid - 1
    } else if (target > nums[mid]) { //在右边找
      l = mid + 1
    } else {
      return mid
    }
  }

  return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))