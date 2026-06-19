class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        n = len (edges)
        parents = {i : i for i in range(1,1+n)}
        def find(x):
            if parents[x] != x :
                parents[x] = find(parents[x])
            return parents[x]
        def union(x,y):
            root1 = find(x)
            root2 = find(y)
            if root1 == root2 :
                return True
            else :
                parents[root1] = root2
            return False 
        for x ,y in edges : 
            # union(x,y)
            if union(x,y):
               return [x ,y]  