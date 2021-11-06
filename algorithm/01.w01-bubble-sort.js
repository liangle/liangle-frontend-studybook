/**
 * 冒泡排序
 * @param nums 要排序的数组  
 */
function bubbleSort(nums) {
  if (!nums || nums.length < 2) return nums

  //冒泡排序特点：数组的右边维护着一段有序并且位置不再变化的区间
  for (let i = 0, len = nums.length; i < len; i++) {
    //将相邻两个元素进行对比，如果左边的大于右边的则交互位置，这样一轮对比后最大的元素移动到第(len - 1 - i)位
    //每一轮对比完成后，第(len - 1 - i)位之后变成有序区间
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }
  return nums
}

console.log(bubbleSort(null));
console.log(bubbleSort(undefined));
console.log(bubbleSort([1]));
const nums = [9, 2, 4, 8, 6, 3, 7, 0, 1, 5]
console.log(bubbleSort(nums));