/**
 * [946. 验证栈序列](https://leetcode-cn.com/problems/validate-stack-sequences/)
 * @param {*} tasks 
 * @param {*} n 
 * @returns 
 */

var validateStackSequences = function (pushed, popped) {
  const stack = []
  const len = pushed.length
  let j = 0

  pushed.forEach(item => {
    //模拟入栈
    stack.push(item)

    //如果 stack 和 popped 第 j 个元素相等则 stack 出栈，j 后移
    // 重复上面一步操作
    while (stack.length && j < len && stack[stack.length - 1] === popped[j]) {
      stack.pop()
      j++
    }
  })

  return j === len
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]))