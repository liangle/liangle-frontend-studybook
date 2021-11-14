function topKFrequent(nums, k) {
  //对数字进行统计
  const map = new Map()
  nums.forEach(num => {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1)
  })

  const arr = []
  map.forEach((value, key) => {
    if (!arr[value]) arr[value] = new Array()
    arr[value].push(key)
  })

  const res = []
  let count = 0
  for (let i = arr.length - 1; i > 0 && count < k; i--) {
    if (arr[i]) {
      count += arr[i].length
      res.push(...arr[i])
    }
  }

  return res
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))