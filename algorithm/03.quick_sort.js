/**
 * 快速排序
 * @param nums 要排序的数组
 */
function quick_sort(nums, start, end) {
  if (!nums || nums.length < 2) return nums

  //快速排序是用分治的思想，把数组分为大小两个区，再分别对两块区再进行快速排序
  if (start < end) {
    let base = partition(nums, start, end)
    quick_sort(nums, start, base - 1)
    quick_sort(nums, base + 1, end)
  }

  return nums
}

function partition(nums, start, end) {
  //从待排序区找一个基准数，把小于这个数的数放左边，大于这个数的数放右边
  //每一轮对比完成后，基准数的位置确定下来
  //再递归对左边、右边部分做相同操作

  let base = end //选最后一位为基准数
  let minEnd = start - 1 //小数区的结尾
  for (let i = start; i < end; i++) {
    if (nums[i] <= nums[base]) {
      //当前数小于基数时，把当前数和第一个大数交换位置
      [nums[minEnd + 1], nums[i]] = [nums[i], nums[minEnd + 1]]
      minEnd++
    }
  }

  //基数和第一个大数交换位置
  [nums[minEnd + 1], nums[base]] = [nums[base], nums[minEnd + 1]]
  return minEnd + 1
}

console.log(quick_sort(null));
console.log(quick_sort(undefined));
console.log(quick_sort([1]));
const nums = [9, 2, 4, 8, 6, 3, 7, 0, 1, 5]
console.log(quick_sort(nums, 0, nums.length - 1));