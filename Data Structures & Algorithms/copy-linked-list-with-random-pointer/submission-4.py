"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head :
            return None
        newLl = {}
        curr = head 
        while curr : 
            newLl[curr] = Node(curr.val)
            curr = curr.next 
        curr = head 
        while curr : 
            new_node = newLl[curr]
            new_node.next = newLl.get(curr.next)
            new_node.random = newLl.get(curr.random)
            curr = curr.next 

        return newLl[head]