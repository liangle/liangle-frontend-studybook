/**
 * 1202. 交换字符串中的元素  https://leetcode-cn.com/problems/smallest-string-with-swaps
 */
var smallestStringWithSwaps = function (s, pairs) {
    const len = s.length
    //初始化并查集，节点个数是字符串长度
    const u = new UnionSet(len)

    //把能够交换的位置合并到一个集合当中
    for (const [a, b] of pairs) {
        u.merge(a, b)
    }

    //初始化 len 个最小优先队列，将同一个集合的字符排序
    const h = new Array(len).fill(0).map(() => new MinPriorityQueue())

    for (let i = 0; i < len; i++) {
        h[u.get(i)].enqueue(s[i], s[i].charCodeAt())
    }

    //合并结果
    let ans = ''
    for (let i = 0; i < len; i++) {
        ans += h[u.get(i)].front()['element']
        h[u.get(i)].dequeue()
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
        const roota = this.get(a)
        //找到b的根节点
        const rootb = this.get(b)

        //如果a和b在一个集合中则不需要合并
        if (roota === rootb) return

        //把节点总数小的树合并到节点总数多的树里
        //更新节点总数多的树为 a和b之和
        if (this.size[roota] < this.size[rootb]) {
            this.pa[roota] = rootb
            this.size[rootb] += this.size[roota]
        } else {
            this.pa[rootb] = roota
            this.size[roota] += this.size[rootb]
        }
    }
}