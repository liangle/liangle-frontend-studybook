/**
 * 686. 滑动窗口最大值 https://leetcode-cn.com/problems/sliding-window-maximum
 */
var maxSlidingWindow = function (nums, k) {
    if (!nums) return [];

    //队列保存数组下标，最大保存k个
    const queue = new Array()
    const len = nums.length
    const ans = []

    for (let i = 0; i < len; i++) {
        //如果新进队列的数字大于队列中最后一个数字，则把最后一个数字去掉，节省空间，
        //并且保证队列中第一个数字就是最大数字
        while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
            queue.pop()
        }

        //将新的数字下标加入队列
        queue.push(i)

        //移除窗口外的元素
        if (i - k === queue[0]) queue.shift()

        //如果滑动窗口内的元素已经大于等于k个，则把队列里第一个元素加入最大值数组中
        if (i + 1 >= k) ans.push(nums[queue[0]])
    }

    return ans
};