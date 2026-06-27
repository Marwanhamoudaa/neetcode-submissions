class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = {}
        // hash = {key => number : value => index}
        for(let num in nums) {
            const secNum = target - nums[num] 
            if (hash[secNum]) {
                return [Number(hash[secNum]) , Number(num)]
            }
            hash[nums[num]] = num 
        }
    
    
    }
}
