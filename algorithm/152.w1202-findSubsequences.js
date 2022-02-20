/**
 * 递增子序列 https://leetcode-cn.com/problems/increasing-subsequences
 */
var findSubsequences = function (nums) {
    const ret = []
    //从0开始，当前已经选择0个元素
    getResult(nums, 0, [], ret)
    return ret
};

var getResult = function (nums, k, buff, ret) {
    //特殊处理，只有1个元素时不算序列
    if (buff.length > 1) ret.push([...buff])

    const len = nums.length
    const map = new Map()
    //在buff中添加一个临时元素
    buff.push(0)

    for (let i = k; i < len; i++) {
        //去重
        if (map.has(nums[i])) continue

        //如果buff里面只有一个元素，或者nuns[i]大于等于buff的倒数第二个元素时
        //把nuns[i]加到buff的最后
        if (buff.length === 1 || nums[i] >= buff[buff.length - 2]) {
            buff[buff.length - 1] = nums[i]

            //去重
            map.set(nums[i], 1)

            //递归处理，第i+1个位置，当前已经选择的元素存在buff中
            getResult(nums, i + 1, [...buff], ret)
        }
    }
}