/**
 * [35. 搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/)
 * @param {*} nums 
 * @param {*} target 
 */
function searchInsert(nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid

  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) { //插入到左边
      right = mid - 1
    } else { //插入到右边
      left = mid + 1
    }
  }

  return left
}

console.log(searchInsert([1, 3, 5, 6], 0))