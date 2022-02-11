/**
 * 区间和的个数 https://leetcode-cn.com/problems/count-of-range-sum
 */
var countRangeSum = function (nums, lower, upper) {
    const len = nums.length

    //初始化前缀和并设置第一个元素为0
    const sum = new Array(len + 1)
    sum[0] = 0
    //计算前缀和
    for (let i = 0; i < len; i++) sum[i + 1] = sum[i] + nums[i]

    //通过对前缀和归并排序计算区间和在指定范围内的个数
    return mergeSort(sum, 0, sum.length - 1, lower, upper)
};

var mergeSort = function (nums, l, r, lower, upper) {
    //如果l大于等于r时，区间只有一个元素或没有元素，不需要排序，个数为0
    if (l >= r) return 0

    //获取中间位置
    const mid = (l + r) >> 1
    let ans = 0

    //对 nums 的 l 到 mid 区间排序，并累加结果
    ans += mergeSort(nums, l, mid, lower, upper)
    //对 nums 的 mid + 1 到 r 区间排序，并累加结果
    ans += mergeSort(nums, mid + 1, r, lower, upper)

    //计算左右两边数组满足条件的元素个数
    ans += countResult(nums, l, mid, mid + 1, r, lower, upper)

    let p1 = l,
        p2 = mid + 1
    const arr = []

    while (p1 <= mid || p2 <= r) {
        //如果右边的数组已经为空，或者左边第一个元素小于右边数组的第一个元素时，把左边的元素加入结果中
        //否则把右边的第一个元素加入结果中
        if ((p2 > r) || (p1 <= mid && nums[p1] <= nums[p2])) {
            arr.push(nums[p1++])
        } else {
            arr.push(nums[p2++])
        }
    }

    //复制排序后的结果到原数组
    for (let i = l; i <= r; i++) nums[i] = arr[i - l]

    return ans
}

var countResult = function (sum, l1, r1, l2, r2, lower, upper) {
    let ans = 0,
        k1 = k2 = l1

    for (let j = l2; j <= r2; j++) {
        //计算区间最小值
        const min = sum[j] - upper
        //计算区间最大值
        const max = sum[j] - lower

        //计算最小值的开始位置
        while (k1 <= r1 && sum[k1] < min) k1++
        //计算最大值的结束位置
        while (k2 <= r1 && sum[k2] <= max) k2++

        //k2 - k1 得到元素个数，这里没有减1，因为最后一次 k2++ 不在范围内
        ans += k2 - k1
    }

    return ans
}