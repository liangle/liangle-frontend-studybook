/**
 * [剑指 Offer II 004. 只出现一次的数字 ](https://leetcode-cn.com/problems/WGki4K/)
 * @param {*} nums 
 */
function singleNumber(nums) {
  const map = new Map()
  let count

  for (const num of nums) {
    if (map.has(num)) {
      count = map.get(num)
      if (count >= 2) {
        map.delete(num)
      } else {
        map.set(num, map.get(num) + 1)
      }
    } else {
      map.set(num, 1)
    }
  }

  return map.keys().next().value
}

// console.log(singleNumber([1, 2, 2, 3, 3, 4, 4]))
const arr = [1, 2, 1, 2, 3, 4, 4]
console.log(arr.reduce((pre, curr) => pre ^ curr))