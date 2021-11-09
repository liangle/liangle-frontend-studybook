/**
 * 计数排序
 * @param {*} nums 
 * @returns 
 */
function countingSort(nums) {
  const arr = new Array(Math.max(...nums) + 1).fill(0) //申请最大数+1个长度的数组，并设置值为0

  for (const num of nums) {
    arr[num]++ //以num为下标的元素值加1
  }

  const ret = []

  for (let i = 0, len = arr.length; i < len; i++) {
    while (arr[i]) {
      ret.push(i)
      arr[i]--
    }
  }

  return ret
}

console.log(countingSort([1, 2, 3, 4, 5, 5, 5, 5, 6, 6, 67, 7, 7, 8]))