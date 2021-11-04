/**
 * 选择排序
 * @param nums 要排序的数组  
 */
function selectionSort(nums) {
  if (!nums || nums.length < 2) return nums

  let minIndex
  //选择排序特点：数组的左边维护着一段有序并且位置不再变化的区间
  for (let i = 0, len = nums.length; i < len; i++) {
    //从待排序区找一个最小的数字和待排序区的第一位元素交换位置
    //每一轮对比完成后，第0至第i位变成有序区间
    //取最小数的区间变为i至len-1

    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j
      }
    }

    //如果找到的最小值不等于nums[i]则交互位置
    if (minIndex !== i)[nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
  }
  return nums
}

console.log(selectionSort(null));
console.log(selectionSort(undefined));
console.log(selectionSort([1]));
const nums = [9, 2, 4, 8, 6, 3, 7, 0, 1, 5]
console.log(selectionSort(nums));