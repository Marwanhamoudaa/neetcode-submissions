class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        SortedNums = set(nums)
        Mcount = 0 
        for num in nums : 
            if (num - 1) not in SortedNums : 
                count = 1 
                while (num+count) in SortedNums :
                    count += 1 
                Mcount = max(Mcount , count)
        return Mcount 
