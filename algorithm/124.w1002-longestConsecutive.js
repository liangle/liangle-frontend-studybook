/**
 * 128. 最长连续序列  https://leetcode-cn.com/problems/longest-consecutive-sequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const len = nums.length
    const u = new UnionSet(len)
    const map = new Map()

    for (let i = 0; i < len; i++) {
        const x = nums[i]
        if (map.has(x)) continue //处理数字重复的情况

        map.set(x, i)

        // 相邻关系变成连通关系
        // 如果 x - 1 存在，则把 x 和 x - 1 的下标合并
        if (map.has(x + 1)) u.merge(i, map.get(x + 1))
        // 如果 x + 1 存在，则把 x 和 x + 1 的下标合并
        if (map.has(x - 1)) u.merge(i, map.get(x - 1))
    }

    let ans = 0
    for (let i = 0; i < len; i++) {
        // 找到节点数最大的集合
        if (u.get(i) === i && u.size[i] > ans) ans = u.size[i]
    }
    return ans
};
class UnionSet {
    constructor(n) {
        //初始化父节点数组，每个节点的父节点默认为自己
        this.pa = new Array(n + 1).fill(0).map((item, index) => index)

        //初始化每棵树的节点数
        this.size = new Array(n + 1).fill(1)
    }

    get(x) {
        //查找x的父节点，并且完成路径优化
        //优化后，x的父节点指向所在树的根节点
        return this.pa[x] = this.pa[x] === x ? x : this.get(this.pa[x])
    }

    merge(a, b) {
        //找到a的根节点
        const ra = this.get(a)
        //找到b的根节点
        const rb = this.get(b)

        //如果a和b在一个集合中则不需要合并
        if (ra === rb) return

        //把节点总数小的树合并到节点总数多的树里
        //更新节点总数多的树为 a和b之和
        if (this.size[ra] < this.size[rb]) {
            this.pa[ra] = rb
            this.size[rb] += this.size[ra]
        } else {
            this.pa[rb] = ra
            this.size[ra] += this.size[rb]
        }
    }
}

var longestConsecutive2 = function (nums) {
    const len = nums.length
    if (len <= 1) return len

    //先去重再排序
    nums = [...new Set(nums)].sort((a, b) => a - b)

    let start = 0
    let ans = 0

    for (let i = 1; i < len; i++) {
        if (nums[i] - nums[i - 1] === 1) {
            ans = Math.max(ans, i - start + 1)
        } else {
            ans = Math.max(ans, i - start)
            //如果前后数组不是递增，则更新开始位置
            start = i
        }
    }

    return ans
};

const arr = [1, 2, 0, 1]
console.log(longestConsecutive(arr))