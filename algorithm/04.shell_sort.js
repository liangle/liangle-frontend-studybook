/**
 * 希尔排序
 * @param nums 要排序的数组  
 */
function shell_sort(nums) {
  if (!nums || nums.length < 2) return nums

  //希尔排序是从索引上把数组分为n/2份、n/2/2份、n/2/2/2份... 1
  //每分一次都对每份数据进行插入排序
  for (let gap = Math.floor(nums.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < nums.length; i++) {

      //插入排序
      for (let j = i; j - gap >= 0; j -= gap) {
        if (nums[j] < nums[j - gap]) {
          [nums[j], nums[j - gap]] = [nums[j - gap], nums[j]]
        }
      }
    }
  }

  return nums
}

console.log(shell_sort(null));
console.log(shell_sort(undefined));
console.log(shell_sort([1]));
const nums = [9, 2, 4, 8, 6, 3, 7, 0, 1, 5]
console.log(shell_sort(nums));