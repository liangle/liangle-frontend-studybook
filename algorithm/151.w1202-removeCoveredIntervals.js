/**
 * 1288. 删除被覆盖区间 https://leetcode-cn.com/problems/remove-covered-intervals
 */
var removeCoveredIntervals = function (intervals) {
    //对区间数字进行排序，左区间相等时按右区间排倒序，不相等则按左区间排升序
    intervals.sort(([l1, r1], [l2, r2]) => l1 === l2 ? r2 - r1 : l1 - l2)

    //有效区间个数
    let cnt = 1
    //前一个右区间的值，默认为-1
    let pre = -1

    for (const [l, r] of intervals) {
        //第一个区间只记录前一个右区间
        if (pre === -1) {
            pre = r
            continue
        }

        //如果当前右区间大于前一个右区间则是有效区间
        if (r > pre) cnt++
        //更新前一个右区间
        pre = Math.max(pre, r)
    }

    return cnt
};