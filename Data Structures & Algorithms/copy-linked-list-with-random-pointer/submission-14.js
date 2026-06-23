// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let hash = new Map();
        hash.set(null, null);
        let cur = head 
        while (cur) {
            hash.set(cur, new Node(cur.val));
            cur = cur.next
        }
        cur = head 
        while (cur){
            let copy = hash.get(cur);
            copy.next = hash.get(cur.next);
            copy.random = hash.get(cur.random);
            cur = cur.next

        }
        return hash.get(head);

    }
}
