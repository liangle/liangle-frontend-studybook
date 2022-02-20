/**
 * H 指数 https://leetcode-cn.com/problems/h-index/
 */
var hIndex = function (citations) {
    //对论文引用次数进行排序
    citations.sort((a, b) => a - b)

    //从右开始扫描，找到不满足条件的位置
    let h = 1,
        n = citations.length

    //如果第 n - h 篇论文大于等于 h，说明满足条件，继续向左判断
    while (h <= n && citations[n - h] >= h) h++

    //最后一次不满足条件，需要减掉
    return h - 1
};