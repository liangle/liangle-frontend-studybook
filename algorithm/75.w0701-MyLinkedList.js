/**
 * [707. 设计链表](https://leetcode-cn.com/problems/design-linked-list/)
 */
var MyLinkedList = function () {
  this.head = null
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let curr = this.head
  while (index-- && curr) {
    curr = curr.next
  }
  return curr ? curr.val : -1
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const listNode = new ListNode(val, this.head)
  this.head = listNode
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const listNode = new ListNode(val)
  let weakHead = new ListNode(null, this.head)
  let curr = weakHead
  while (curr && curr.next) {
    curr = curr.next
  }
  curr.next = listNode
  this.head = weakHead.next
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  const listNode = new ListNode(val)
  let currIndex = 0
  let weakHead = new ListNode(null, this.head)
  let curr = weakHead
  while (curr.next && currIndex < index) {
    curr = curr.next
    currIndex++
  }

  if (currIndex === index) {
    listNode.next = curr.next
    curr.next = listNode
    this.head = weakHead.next
  }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let currIndex = 0
  let weakHead = new ListNode(null, this.head)
  let curr = weakHead
  while (curr.next && currIndex < index) {
    prev = curr
    curr = curr.next
    currIndex++
  }

  if (curr.next) {
    curr.next = curr.next.next
    this.head = weakHead.next
  }
};

const myLinkedList = new MyLinkedList()
myLinkedList.addAtIndex(1, 0)
myLinkedList.get(0)