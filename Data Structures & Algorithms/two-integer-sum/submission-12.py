class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums_map = {}
        for i in range(len(nums)):
            sec = target - nums[i]
            if sec in nums_map :
                return [nums_map[sec],i]
            else:
                nums_map[nums[i]]= i


