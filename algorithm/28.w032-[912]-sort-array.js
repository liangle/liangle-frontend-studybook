/**
 * [912. 排序数组](https://leetcode-cn.com/problems/sort-an-array/)
 * @param {*} nums 
 */
function sortArray(nums) {
  if (!nums || nums.length === 1) return nums
  return mergeSort(nums, 0, nums.length - 1)
}

function mergeSort(nums, l, r) {
  if (l === r) return [nums[l]]
  let mid = (l + r) >> 1

  const left = mergeSort(nums, l, mid)
  const right = mergeSort(nums, mid + 1, r)

  return merge(left, right)
}

/**
 *  线性合并
 * @param {*} left 
 * @param {*} right 
 */
function merge(left, right) {
  const res = []
  let i = j = 0
  const llen = left.length
  const rlen = right.length

  while (i < llen && j < rlen) { //取左右数组当前最小元素
    res.push(left[i] <= right[j] ? left[i++] : right[j++])
  }

  while (i < llen) { //取左边剩余部分
    res.push(left[i++])
  }

  while (j < rlen) { //取右边剩余部分
    res.push(right[j++])
  }

  return res
}

console.log(sortArray([7, 5, 8, 1, 2, 6, 4, 3]))