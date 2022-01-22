/**
 * 75. 颜色分类 https://leetcode-cn.com/problems/sort-colors/
 */
var sortColors = function (nums) {
  quikSort(nums, 0, nums.length - 1)
};

var quikSort = function (nums, start, end) {
  if (start < end) {
    // 每次确定一位数字的位置
    let base = partition(nums, start, end)
    quikSort(nums, start, base - 1)
    quikSort(nums, base + 1, end)
  }
}

var partition = function (nums, start, end) {
  //从待排序区找一个基准数，把小于这个数的数放左边，大于这个数的数放右边
  //每一轮对比完成后，基准数的位置确定下来
  //再递归对左边、右边部分做相同操作

  let base = end //选最后一位为基准数的位置
  let bigStart = start //默认开始位置为大数的开始位置

  for (let i = start; i < end; i++) {
    //当前数小于基数时，把当前数和第一个大数交换位置
    if (nums[i] <= nums[base]) {
      [nums[bigStart], nums[i]] = [nums[i], nums[bigStart]]
      minEnd++
    }
  }

  //基数和第一个大数交换位置
  [nums[bigStart], nums[base]] = [nums[base], nums[bigStart]]

  //返回当次确定位置的下标
  return minEnd
}

console.log(sortColors([2, 0, 2, 1, 1, 0]))