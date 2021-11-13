function topKFrequent(nums, k) {
  //取最大元素和最小元素，算出每个桶的区间
  const min = Math.min(...nums)
  const max = Math.max(...nums)
  const offset = (max - min + 1) / 10 //10个桶
  const bucket = []
  let bucketIndex = 0

  for (let i = 0; i < 10; i++) {
    bucket.push(new Array())
  }

  nums.forEach(num => {
    bucketIndex = Math.floor((num - min) / offset)
    bucket[bucketIndex].push(num)
  })

  let res = []
  bucket.forEach(arr => {
    if (arr.length > 0) {
      res = res.concat(mergeSort(arr, 0, arr.length - 1))
    }
  })

  return res
}

function mergeSort(nums, l, r) {
  if (l === r) return [nums[l]]

  const mid = (l + r) >> 1
  const left = mergeSort(nums, l, mid)
  const right = mergeSort(nums, mid + 1, r)

  return merge(left, right)
}

function merge(left, right) {
  let i = j = 0
  let llen = left.length
  let rlen = right.length
  let res = []

  while (i < llen && j <= rlen) {
    res.push(left[i] <= right[j] ? left[i++] : right[j++])
  }

  while (i < llen) {
    res.push(left[i++])
  }

  while (j < rlen) {
    res.push(right[j++])
  }

  return res
}

console.log(topKFrequent([1, 2, 3, 4, 5, 6, 7, 8, 4, 5, 5, 7, 2, 2], 2))