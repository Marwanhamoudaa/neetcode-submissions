/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
let newhead = new ListNode()
let curr = newhead
        newhead.next = curr
        while (list1 && list2) {
            if (list1.val > list2.val) {
                curr.next = list2 
                list2 = list2.next
                curr = curr.next
            }else {
                curr.next = list1 
                list1 = list1.next
                curr = curr.next
            }
        }
        curr.next = list1 || list2
        return newhead.next

    }
}
