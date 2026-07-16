class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = {} 
        // key => number , val => index 
        for (let num in nums ) {
            let sec = target - nums[num] 
            if (hash[sec]) return [Number(hash[sec]) , Number(num)]
            hash[nums[num]] = num 

        }
    }
}
