/**
 * [202. 快乐数](https://leetcode-cn.com/problems/happy-number/)
 * @param {*} n 
 */

function isHappy(n) {
  const map = new Map() //记录中间处理结果，判断无限循环
  return partition(n, map)
}

function partition(n, map) {
  if (n === 1) return true
  if (map.has(n)) return false

  let num = n
  let sum = 0
  while (num > 0) {
    sum += Math.pow(num % 10, 2)
    num = Math.floor(num / 10)
  }

  map.set(n, 1)

  return partition(sum, map)
}

console.log(isHappy(19))