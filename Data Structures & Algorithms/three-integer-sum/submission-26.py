class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        snums = sorted(nums)
        res = []
        for i in range(len(nums)-2) :
            start = i + 1 
            end = len(nums) - 1 
            if i > 0 and snums[i] == snums[i-1] :
                continue
            while start < end : 
                total = snums[i] + snums[start] + snums[end]
                if total == 0 :
                    res.append([snums[i] , snums[start] , snums[end]])
                    while start < end and snums[start] == snums[start+1] :
                        start += 1
                    while start < end and snums[end] == snums[end-1] :
                        end -= 1
                    start += 1 
                    end -= 1 
                elif total < 0 :
                    start+=1 
                elif total > 0 :
                    end -= 1 
            
        return res





 



        