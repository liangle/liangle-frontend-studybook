/**
 * 子数组和排序后的区间和 https://leetcode-cn.com/problems/range-sum-of-sorted-subarray-sums
 */
var rangeSum = function (nums, n, left, right) {
    let len = nums.length
    const arr = []

    //通过双循环计算子数组的和
    for (let i = 0; i < len; i++) {
        let tmp = nums[i]
        arr.push(tmp)

        for (let j = i + 1; j < len; j++) {
            tmp += nums[j]
            arr.push(tmp)
        }
    }

    //子数组和排序
    arr.sort((a, b) => a - b)

    let ans = 0
    // 计算 left 到 right 的和，注意 left 是从 1 开始，所以开始位置是 left - 1
    for (let i = left - 1; i < right; i++) {
        ans += arr[i]
    }

    // 对结果 mod 一个 1000000007
    return ans % 1000000007
};