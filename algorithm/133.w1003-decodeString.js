/**
 * 689. 字符串解码 https://leetcode-cn.com/problems/decode-string
 */
var decodeString = function (s) {
    let stack = new Array()
    let num = ''

    for (let c of s) {
        if (!isNaN(Number(c))) {
            //将数组拼接起来
            num += c
        } else if (c === '[') {
            stack.push(Number(num))
            stack.push('[')
            num = ''
        } else if (c === ']') {
            //遇到右括号时，依次出栈字符并且拼接，直到栈顶为左括号
            let str = ''
            while (stack.length && stack[stack.length - 1] !== '[') {
                str = `${stack.pop()}${str}`
            }
            //把左括号出栈
            stack.pop()

            //向栈内增加 count 个字符串
            let count = stack.pop()
            while (count--) stack.push(str)
        } else {
            stack.push(c)
        }
    }

    return stack.join('')
};

console.log(decodeString("3[a2[c]]"))