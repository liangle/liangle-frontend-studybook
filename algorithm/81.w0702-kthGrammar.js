/**
 * [779. 第K个语法符号](https://leetcode-cn.com/problems/k-th-symbol-in-grammar/)
 */
var kthGrammar = function (n, k) {
  //暴力破解
  let ans = [0]
  for (let i = 1; i < n; i++) {
    for (let j = (1 << (i - 1)) - 1; j >= 0; j--) {
      ans[2 * j] = ans[j] //左半部分
      ans[2 * j + 1] = 1 - ans[j] //右半部分
    }
  }

  return ans[k - 1]
};

var kthGrammar2 = function (n, k) {
  if (n == 1) return 0;
  return (~k & 1) ^ kthGrammar2(n - 1, (k + 1) / 2);
}

console.log(kthGrammar2(4, 5))