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

        let dummy = new ListNode()
        let curr2 = dummy 
       while (prev && head) {
    let temp1 = head;
    let temp2 = prev;

    head = head.next;
    prev = prev.next;

    curr2.next = temp1;
    curr2 = curr2.next;

    curr2.next = temp2;
    curr2 = curr2.next;
}

if (head) {
    curr2.next = head;
}
    }}
