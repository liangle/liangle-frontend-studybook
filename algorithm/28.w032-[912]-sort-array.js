/**
 * [912. 排序数组](https://leetcode-cn.com/problems/sort-an-array/)
 * @param {*} nums 
 */
function sortArray(nums) {
  if (!nums || nums.length === 1) return nums
  return mergeSort(nums, 0, nums.length - 1)
}

function mergeSort(nums, l, r) {
  if (l >= r) return []
  let mid = (l + r) >> 1

  const tmp = []
  const left = mergeSort(nums, l, mid)
  const right = mergeSort(nums, mid + 1, r)

  //合并
  let i = l
  let j = mid + 1
  let count = 0

  while (i <= mid && j <= r) {
    tmp[count++] = nums[i] <= nums[j] ? nums[i++] : nums[j++]
  }

  while (i <= mid) { //取左边剩余部分
    tmp[count++] = nums[i++]
  }

  while (j <= r) { //取右边剩余部分
    tmp[count++] = nums[j++]
  }

  // 往回写
  for (let i = 0, len = tmp.length; i < len; i++) {
    nums[i + l] = tmp[i]
  }

  return nums
}

console.log(sortArray([7, 5, 8, 1, 2, 6, 4, 3]))