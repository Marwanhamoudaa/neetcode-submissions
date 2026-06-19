from collections import defaultdict
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        freq = [[]for i in range (len(nums) + 1 )]
        for i in range (len(nums)):
            count[nums[i]] = 1 + count.get(nums[i],0)
        for key , v in count.items() :
            freq[v].append(key) 
        res = [] 
        for i in range(len(freq) -1 , 0 , -1) :
            for nums in freq[i]:
                res.append(nums)
                if len(res) == k :
                    return res 



        