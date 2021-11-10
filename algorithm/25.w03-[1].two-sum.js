/**
 * [两数之和](https://leetcode-cn.com/problems/two-sum/)
 * @param {*} nums 
 * @param {*} target 
 */
function twoSum(nums, target) {
  const map = new Map() //记录num和target的差值，如果循环数组遇到差值则返回

  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]
    const x = target - num //转换成求差的问题

    if (map.has(x)) return [map.get(x), i]
    map.set(x, i)
  }

  return []
}

console.log(twoSum([2, 7, 11, 15]), 9)