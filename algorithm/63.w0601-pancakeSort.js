/**
 * [969. 煎饼排序](https://leetcode-cn.com/problems/pancake-sorting/)
 * @param {*} tasks 
 * @param {*} n 
 * @returns 
 */

var pancakeSort = function (arr) {
  let res = new Array()
  sort(arr, sort.length, res)
  return res
};

var sort = function (arr, n, res) {
  if (n === 1) return
  let maxCake = 0
  let maxCakeIndex = 0
  let len = arr.length

  for (let i = 0; i < len; i++) {
    if (arr[i] > maxCake) {
      maxCake = arr[i]
      maxCakeIndex = i
    }
  }

  reverse(arr, 0, maxCakeIndex)
  res.push(maxCakeIndex + 1)
  reverse(arr, 0, n - 1)
  res.push(n)

  sort(arr, n - 1, res)
}

var reverse = function (arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
  }
}

console.log(pancakeSort([3, 2, 4, 1], 2))