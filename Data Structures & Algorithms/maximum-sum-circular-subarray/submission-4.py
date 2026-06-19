class Solution:
    def maxSubarraySumCircular(self, nums: List[int]) -> int:
        max_sum = nums[0] 
        current_sum = 0
        min_sum = nums [0]
        current_min = 0
        total = 0 
        for num in nums : 
            current_sum = max(num,current_sum+num)
            max_sum = max(max_sum , current_sum)
            total += num
            current_min = min(num , current_min + num)
            min_sum = min(min_sum ,current_min)
        if max_sum < 0 :
            return max_sum 
        return max(max_sum , total - min_sum)
        