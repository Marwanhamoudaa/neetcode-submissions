class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = {}
        // key => num , val => index 
        for (let i = 0 ; i < nums.length ; i++ ) { 
            let sec = target - nums[i]
            if (hash[sec] !== undefined) return [ Number(hash[sec]) ,Number(i) ]
            hash[nums[i]]  = i ; 
            
        }
    }
}
