class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [1] * len(nums) 
        ProductBefor =  1
        #[1,1,1,1,1,1,1] 
        for i in range (len(nums)) :
            res[i] *= ProductBefor 
            ProductBefor *= nums[i]
        After = 1 
        for i in range(len(nums)-1 , -1 , -1) :
            res[i] *= After 
            After *= nums[i]
        
        return res
