class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums_list =[]
        for i in range (len(nums)):
            sec = target - nums[i]
            if sec in nums_list : 
                return [nums.index(sec),i]
            else : 
                nums_list.append(nums[i])