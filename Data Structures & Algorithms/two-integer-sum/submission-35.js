class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = {} 
        // key => number , val => index 
        for (let i in nums ){
            let sec = target - nums[i]
            if (hash[sec]) return [Number(hash[sec]) , Number(i)]
            hash[nums[i]] = i
        }
    }
}
