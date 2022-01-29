/**
 * 947. 移除最多的同行或同列石头  https://leetcode-cn.com/problems/most-stones-removed-with-same-row-or-column
 */
var removeStones = function (stones) {
    const len = stones.length
    //初始化并查集，节点个数为石头个数
    const u = new UnionSet(len)
    const ind_x = new Map()
    const ind_y = new Map()

    //将石头的下标插入并查集
    for (let i = 0; i < len; i++) {
        const [x, y] = stones[i]

        //判断x方向是否有石头，如果有则和当前节点合并
        if (ind_x.has(x)) u.merge(i, ind_x.get(x))
        //判断y方向是否有石头，如果有则和当前节点合并
        if (ind_y.has(y)) u.merge(i, ind_y.get(y))

        ind_x.set(x, i)
        ind_y.set(y, i)
    }

    let cnt = 0

    //统计集合数，父节点为自己的代表一个集合
    for (let i = 0; i < len; i++) {
        if (u.get(i) === i) cnt++
    }

    //可移除节点数 = 石头总数 - 集合数（每个集合剩余1块石头）
    return len - cnt
};

class UnionSet {
    constructor(n) {
        //初始化父节点数组，每个节点的父节点默认为自己
        this.pa = new Array(n).fill(0).map((item, index) => index)

        //初始化每棵树的节点数
        this.size = new Array(n).fill(1)
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