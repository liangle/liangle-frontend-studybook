/**
 * 最大间距 https://leetcode-cn.com/problems/maximum-gap/
 */
var maximumGap = function (nums) {
    //数组中只有一个元素或没有元素时没有最大间距
    if (nums.length < 2) return 0

    const len = nums.length
    const temp = new Array(len)
    const max = Math.max(...nums)
    let exp = 1

    //如果最大数字大于等于第 exp，则对 exp 为进行排序
    while (max >= exp) {
        //声明计数结果数组，并将每个元素初始化为 0
        const cnt = new Array(10).fill(0)

        //对 exp 位进行计数，将结果放在 cnt 数组中
        for (const x of nums) {
            //计算 exp 位的值
            const digit = Math.floor(x / exp) % 10
            cnt[digit]++
        }

        //计算前缀和
        for (let i = 1; i < 10; i++) cnt[i] += cnt[i - 1]

        //将 exp 位排序的结果放入 temp 数组中，从后往前放入
        for (let i = len - 1; i >= 0; i--) {
            //计算 exp 位的值
            const digit = Math.floor(nums[i] / exp) % 10

            //将 nums[i] 放入到 cnt[digit] 位上，并且 cnt[digit] 减1
            temp[--cnt[digit]] = nums[i]
        }

        //将 temp 数组中已排序的元素更新到 nums 数组中
        nums = [...temp]

        //对高一位进行计数排序操作
        exp *= 10
    }

    let ans = 0
    //遍历排序后的数组，计算相邻元素之间的差，取其中最大的差
    for (let i = 1; i < len; i++) {
        ans = Math.max(ans, nums[i] - nums[i - 1])
    }
    return ans
};