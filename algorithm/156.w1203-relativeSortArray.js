/**
 * 数组的相对排序 https://leetcode-cn.com/problems/relative-sort-array/
 */
var relativeSortArray = function (arr1, arr2) {
    //定义计数数组并初始化元素为0
    const cnt = new Array(1001).fill(0)
    //对arr1进行统计
    for (const x of arr1) cnt[x] += 1

    let k = 0
    //将数组2中的元素放在前面
    for (const x of arr2) {
        //向数组1中写入 cnt[x] 个 x
        while (cnt[x]--) arr1[k++] = x
    }

    //将不在数组2中的元素放在末尾
    for (let i = 0; i < 1001; i++) {
        //数量小于1的元素跳过
        if (cnt[i] <= 0) continue
        //向数组1中写入 cnt[i] 个 i
        while (cnt[i]--) arr1[k++] = i
    }
    //返回已排序数组
    return arr1
};