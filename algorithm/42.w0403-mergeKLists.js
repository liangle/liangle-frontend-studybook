/**
 * [23. 合并K个升序链表](https://leetcode-cn.com/problems/merge-k-sorted-lists/)
 * @param {*} lists 
 * @returns 
 */
var mergeKLists = function (lists) {
    //创建小顶堆
    const q = new MinPriorityQueue()

    //将所有不为空的链表入小顶堆
    lists.forEach(list => {
        if (list) q.enqueue(list, list.val)
    })

    //创建新链表的虚拟头节点
    const res = new ListNode(null)
    let cur = res
    while (!q.isEmpty()) {
        //取小顶堆的堆顶元素
        const node = q.front()['element']
        //当前节点的下个节点指向堆顶元素
        cur.next = node
        //当前节点后移
        cur = cur.next
        //堆顶元素弹出
        q.dequeue()
        //如果取出的堆顶元素下个节点不为空，则将下个节点入队列
        if (node.next) q.enqueue(node.next, node.next.val)
    }

    return res.next
};