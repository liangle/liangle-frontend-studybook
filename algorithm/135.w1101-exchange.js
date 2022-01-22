/**
 * 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面 https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
 */
var exchange = function (nums) {
  const ans = []

  nums.forEach(num => {
    num % 2 === 0 ? ans.push(num) : ans.unshift(num)
  })

  return ans
};

console.log(exchange([1, 2, 3, 4]))