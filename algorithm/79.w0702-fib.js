/**
 * [剑指 Offer 10- I. 斐波那契数列](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/)
 */
var fib = function (n) {
  if (n <= 1) return n

  let num1 = 0,
    num2 = 1

  while (n-- > 1) {
    [num2, num1] = [(num1 + num2), num2]
  }

  return num2 % 1000000007
};