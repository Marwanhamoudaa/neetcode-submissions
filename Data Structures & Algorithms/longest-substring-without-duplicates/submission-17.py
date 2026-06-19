class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start = 0 
        max_days =  0
        seen = set ()
        for end in range(len(s)) : 
            while s[end] in seen :
                seen.remove(s[start])
                start +=1 
            seen.add(s[end])
            max_days = max (max_days,end - start+1)

        return max_days



                   