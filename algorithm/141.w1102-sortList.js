/**
 * 排序链表 https://leetcode-cn.com/problems/sort-list
 */
var sortList = function (head) {
    //head.next 为空时，递归结束
    if (head === null || head.next === null) return head

    let fast = head.next
    let slow = head

    //找到链表的中间节点
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    const tmp = slow.next
    slow.next = null //从中间断开

    //递归排序左边子链表
    let left = sortList(head)
    //递归排序右边子链表
    let right = sortList(tmp)

    let curr = new ListNode()
    const ans = curr

    while (left && right) {
        if (left.val <= right.val) {
            //左链表表头节点小于等于右链表表头节点，把左链表头节点加入新链表
            //左链表后移
            curr.next = left
            left = left.next
        } else {
            //右链表表头节点大于左链表表头节点，把右链表头节点加入新链表
            //右节点后移
            curr.next = right
            right = right.next
        }

        //新链表当前节点后移
        curr = curr.next
    }

    //把左边或右边剩余的部分加到链表中
    curr.next = left ? left : right

    return ans.next
};