/**
 * [剑指 Offer 40. 最小的k个数](https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/)
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  //将数组排升序
  const ans = quickSort(arr, 0, arr.length - 1)

  //保留k个元素
  while (ans.length > k) {
    ans.pop()
  }

  return ans
};

var quickSort = function (nums, left, right) {
  if (!nums || nums.length < 2) return nums
  if (left < right) {
    const base = partition(nums, left, right)
    quickSort(nums, left, base - 1)
    quickSort(nums, base + 1, right)
  }
  return nums
}

var partition = function (nums, left, right) {
  //从待排序区找一个基准数，把小于这个数的数放左边，大于这个数的数放右边
  let base = right
  let minIndex = left
  for (let i = left; i < right; i++) {
    if (nums[i] <= nums[base]) {
      //当前数小于基数时，把当前数和第一个大数交换位置
      [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]]
      minIndex++
    }
  }

  //基数和第一个大数交换位置
  [nums[minIndex], nums[base]] = [nums[base], nums[minIndex]]

  return minIndex
}