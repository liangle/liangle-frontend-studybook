/**
 * 合并 K 个升序链表 https://leetcode-cn.com/problems/merge-k-sorted-lists
 */
var mergeKLists = function (lists) {
    return merge(lists, 0, lists.length - 1)
}

var merge = function (lists, left, right) {
    if (left === right) return lists[left]
    if (left > right) return null

    // 从数组中间平分，通过分治的方式合并链表
    const mid = (left + right) >> 1
    // 合并数组左边链表
    const l1 = merge(lists, left, mid)
    // 合并数组右边链表
    const l2 = merge(lists, mid + 1, right)
    return mergeTwoList(l1, l2)
}

function mergeTwoList(l1, l2) {
    if (!l1 || !l2) return l1 ? l1 : l2
    const tail = new ListNode()

    if (l1.val <= l2.val) {
        // 如果 l1 的表头小于等于 l2 的表头，则把 l1 取出来
        // 再将 l1 的 next 和 l2 合并，返回的结果再和 l1 连接
        tail.next = l1
        l1.next = mergeTwoList(l1.next, l2)
    } else {
        // 如果 l1 的表头大于 l2 的表头，则把 l2 取出来
        // 再将 l2 的 next 和 l1 合并，返回的结果再和 l2 连接
        tail.next = l2
        l2.next = mergeTwoList(l1, l2.next)
    }

    //返回临时节点的下个节点
    return tail.next
}