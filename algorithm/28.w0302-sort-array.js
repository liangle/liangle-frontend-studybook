/**
 * [912. 排序数组](https://leetcode-cn.com/problems/sort-an-array/)
 * @param {*} nums 
 */
var sortArray = function (nums) {
    mergeSort(nums, 0, nums.length - 1)
    return nums
};

//将待排序数组 nums 的第 l 到 r 区间进行排序
var mergeSort = function (nums, l, r) {
    //如果l大于等于r时，区间只有一个元素或没有元素，不需要排序
    if (l >= r) return

    //获取中间位置
    const mid = (l + r) >> 1

    //对 nums 的 l 到 mid 区间排序
    mergeSort(nums, l, mid)
    //对 nums 的 mid + 1 到 r 区间排序
    mergeSort(nums, mid + 1, r)

    //arr 存放排序结果
    const arr = []
    let p1 = l
    let p2 = mid + 1

    while (p1 <= mid || p2 <= r) {
        //如果右边的数组已经为空，或者左边第一个元素小于右边数组的第一个元素时，把左边的元素加入结果中
        //否则把右边的第一个元素加入结果中
        if (p2 > r || (p1 <= mid && nums[p1] < nums[p2])) {
            arr.push(nums[p1++])
        } else {
            arr.push(nums[p2++])
        }
    }

    //将排序结果复制到原数组
    for (let i = l; i <= r; i++) nums[i] = arr[i - l]
}

console.log(sortArray([7, 5, 8, 1, 2, 6, 4, 3]))