class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numbers = {}
        #Key = number , val = index 
        for i in range(len(nums)) : 
            SecNumber = target - nums[i]
            if SecNumber in numbers :
                return [numbers[SecNumber] , i ]
            else : 
                numbers[nums[i]] = i 
            

