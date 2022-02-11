/**
 * 计算右侧小于当前元素的个数 https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self
 */
var countSmaller = function (nums) {
    const arr = []
    const len = nums.length

    //将数组转换成新的数据结构
    //新的数据结构包括当前值、索引（用于统计后重新组装）、和右侧小于当前元素个数
    for (let i = 0; i < len; i++) {
        arr.push({
            val: nums[i],
            ind: i,
            cnt: 0
        })
    }

    //对数组进行归并排序
    mergeSort(arr, 0, arr.length - 1)

    //重新组装数组返回：将统计结果放到原数组对应的索引位置
    const ans = new Array(len)
    arr.forEach(item => {
        ans[item.ind] = item.cnt
    })

    return ans
};

var mergeSort = function (nums, l, r) {
    //如果l大于等于r时，区间只有一个元素或没有元素，不需要排序，个数为0
    if (l >= r) return 0

    //获取中间位置
    const mid = (l + r) >> 1
    //对 nums 的 l 到 mid 区间排序
    mergeSort(nums, l, mid)
    //对 nums 的 mid + 1 到 r 区间排序
    mergeSort(nums, mid + 1, r)

    const arr = []
    let p1 = l,
        p2 = mid + 1

    while (p1 <= mid || p2 <= r) {
        //如果右边的数组已经为空，或者左边第一个元素大于右边数组的第一个元素时，把左边的元素加入结果中
        //否则把右边的第一个元素加入结果中
        if ((p2 > r) || (p1 <= mid && nums[p1].val > nums[p2].val)) {
            //累计右边数组中小于当前元素的个数
            nums[p1].cnt += r - p2 + 1

            arr.push(nums[p1++])
        } else {
            arr.push(nums[p2++])
        }
    }

    //复制排序后的结果到原数组
    for (let i = l; i <= r; i++) nums[i] = arr[i - l]
}