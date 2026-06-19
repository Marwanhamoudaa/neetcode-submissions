class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        sorted_nums = set(nums)
        count = 0
        max_count = 0 
        for num in sorted(sorted_nums) : 
            if num - 1 in sorted_nums : 
                count += 1 
            else : 
                max_count = max(max_count , count)
                count = 1 
        return max (max_count , count )
