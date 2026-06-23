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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
       let fast = head.next
       let slow = head 
       while (fast && fast.next ) {
        fast = fast.next.next 
        slow = slow.next 
       }

        let second = slow.next 
        slow.next = null 
        let prev = null
        let curr = second 
        while (curr) {
            let next = curr.next 
            curr.next = prev 
            prev = curr 
            curr = next
        }
        second = prev 
        while (second) {
           let temp1 = head.next
           let temp2 = second.next
           head.next = second
           second.next = temp1
           head = temp1 
           second = temp2
        } 
    }
    }
