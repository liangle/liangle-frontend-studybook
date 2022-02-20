/**
 * 合并区间 https://leetcode-cn.com/problems/merge-intervals
 */
var merge = function (intervals) {
    const arr = []

    //把区间转换成括号，1代表做括号，-1代表右括号
    for (const [l, r] of intervals) {
        arr.push([l, 1])
        arr.push([r, -1])
    }

    //排序：先按区间数字排升序，如果数组一样则再按括号排倒序
    arr.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])

    const ans = []
    let l = -1 //记录区间左侧数字
    let sum = 0 //累计括号的和

    for (const [a, b] of arr) {
        //如果需要，将a设置为区间左侧的数字
        if (l === -1) l = a

        //累计括号的值
        sum += b

        //和为0时说明遇到了右括号，则[l, a]为一个有效的合并后的区间
        if (sum === 0) {
            ans.push([l, a])
            //将左括号重置为-1
            l = -1
        }
    }

    return ans
};