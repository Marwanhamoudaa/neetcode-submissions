class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [1] * len(nums)
        be = 1 
        #[1,1,1,1,1]
        for i in range(len(nums)):
            res[i] *= be 
            be *= nums[i]
        af = 1
        for i in range(len(nums)-1 , -1 , -1):
            res[i] *= af 
            af *= nums[i]
        return res 
