from collections import defaultdict 
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        sorted_nums = sorted(nums) 
        res = []
        for i in range (len(nums)-2) : 
            left = i + 1 
            right = len(nums) - 1 
            if i > 0 and sorted_nums[i] == sorted_nums[i-1] :
                continue
            while left < right :
                total = sorted_nums[i] + sorted_nums[left] + sorted_nums[right] 
                if total == 0 :
                    res.append([sorted_nums[i] , sorted_nums[left] , sorted_nums[right]])
                    while left < right and sorted_nums[left] == sorted_nums[left + 1] :
                        left += 1
                    while left < right and sorted_nums[right] == sorted_nums[right - 1] :
                        right -= 1
                    right -= 1 
                    left += 1 
                
                elif total > 0 : 
                    right -= 1
                else :
                    left += 1 
                
        return res
            
