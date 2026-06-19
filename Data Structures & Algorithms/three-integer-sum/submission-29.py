from collections import defaultdict 
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        s_nums = sorted(nums) 
        res = []
        for i in range (len(s_nums)-2):
            left = i + 1 
            right = len (s_nums) - 1 
            if i > 0 and s_nums[i] == s_nums[i-1] :
                continue
            while left < right :
                total = s_nums[i] + s_nums[left] + s_nums[right] 
                if total == 0 :
                    res.append([s_nums[i] , s_nums[left] , s_nums[right]])
                    while left < right and s_nums[left] == s_nums[left+1] :
                        left += 1 
                    while left < right and s_nums[right] == s_nums[right-1] :
                        right -= 1 
                    left += 1 
                    right -= 1 

                elif total > 0 :
                    right -= 1 
                else :
                    left += 1 
            
        return res
                
                
            
