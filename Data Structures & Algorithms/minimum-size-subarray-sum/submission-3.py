class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        start = 0
        min_lenght = float('inf')
        current_sum = 0 
        for end in range (len(nums)) :
            current_sum += nums[end]
            while current_sum >= target :
                min_lenght = min(min_lenght,end-start +1)
                current_sum -= nums[start]
                start+=1 
        return 0 if min_lenght == float("inf") else min_lenght 