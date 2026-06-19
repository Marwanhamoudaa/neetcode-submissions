class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numbers = {}
        for i , val in enumerate(nums) :
            diff = target - val 
            if diff in numbers :
                return [numbers[diff] , i ]
            else: 
                numbers[val] = i