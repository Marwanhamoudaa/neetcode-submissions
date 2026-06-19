from collections import defaultdict
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        result = defaultdict(list)
        for s in strs :
            sig = ''.join(sorted(s))
            result[sig].append(s) 
        return list(result.values())
    

        