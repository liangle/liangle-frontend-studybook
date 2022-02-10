/**
 * 剑指 Offer 51. 数组中的逆序对 https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof
 */
var reversePairs = function (nums) {
    //对数组 nums 的第 0 到最后一位进行排序
    return countResult(nums, 0, nums.length - 1)
};

//将待排序数组 nums 的第 l 到 r 区间进行排序，并返回该区间中的逆序对
var countResult = function (nums, l, r) {
    //如果l大于等于r时，区间只有一个元素或没有元素，不需要排序，逆序对为0
    if (l >= r) return 0

    //获取中间位置，等于 l + r 除 2
    const mid = (l + r) >> 1
    let ans = 0

    //对 nums 的 l 到 mid 区间排序，并计算逆序对
    ans += mergeSort(nums, l, mid)
    //对 nums 的 mid + 1 到 r 区间排序，并计算逆序对
    ans += mergeSort(nums, mid + 1, r)

    //arr 存放排序结果
    const arr = []
    //定义双指针，p1 从l开始到mid，p2 从mid+1开始到r
    let p1 = l
    let p2 = mid + 1

    while (p1 <= mid || p2 <= r) {
        //如果右边的数组已经为空，或者左边第一个元素小于右边数组的第一个元素时
        //把左边的元素加入结果中，并且左边指针后移
        //否则把右边的第一个元素加入结果中，并且右边指针后移
        if (p2 > r || (p1 <= mid && nums[p1] < nums[p2])) {
            arr.push(nums[p1++])
        } else {
            arr.push(nums[p2++])

            //左边数组剩余元素都大于右边数组第一个元素，能组成逆序个数为左边元素个数
            ans += mid - p1 + 1
        }
    }

    //将排序结果复制到原数组
    for (let i = l; i <= r; i++) nums[i] = arr[i - l]

    //返回逆序对
    return ans;
}