/**
 * 插入排序
 * @param nums 要排序的数组  
 */
function insertion_sort(nums) {
  if (!nums || nums.length < 2) return nums

  //插入排序特点：数组的左边维护着一段有序区间
  for (let i = 1, len = nums.length; i < len; i++) { //从第二个数开始比较
    //将0至i之间的数字，从右到左进行对比，做一次冒泡排序
    //因为原来0至(i-1)是有序的，加入i之后做一次冒泡排序，这段区间再次变得有序
    for (let j = i; j > 0; j--) {
      if (nums[j] < nums[j - 1]) { //如果当前数字小于前一个数字则交换位置，否则结束冒泡
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
      }
    }
  }
  return nums
}

console.log(insertion_sort(null));
console.log(insertion_sort(undefined));
console.log(insertion_sort([1]));
const nums = [9, 2, 4, 8, 6, 3, 7, 0, 1, 5]
console.log(insertion_sort(nums));