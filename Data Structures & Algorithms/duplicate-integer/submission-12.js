class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hash = {}

        for (let num of nums) {
            if (hash[num]){
                return true
            }
                hash[num] = 1
        }
        return false 
    }
}
