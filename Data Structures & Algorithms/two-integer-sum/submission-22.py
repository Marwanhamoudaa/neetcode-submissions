class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        #numbers = {{number , index}}
        numbers = {}
        for i in range(len(nums)) :
            sec = target - nums[i]
            if sec in numbers :
                return [numbers[sec] , i ] 
            else : 
                numbers [nums[i]] = i



