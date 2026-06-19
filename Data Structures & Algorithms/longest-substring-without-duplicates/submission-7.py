class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start = 0 
        max_lenght = 0
        seen = set()
        for end in range (len(s)):
            while s[end] in seen : 
                seen.remove(s[start])
                start += 1 
            seen.add(s[end])
            max_lenght = max (max_lenght ,end - start + 1  )
        return max_lenght


                   