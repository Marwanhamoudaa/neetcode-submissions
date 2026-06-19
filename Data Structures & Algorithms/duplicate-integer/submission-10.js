class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
    let hashMap = {};

    for (let num of nums) {
        if (hashMap[num]) {
            return true;
        }

        hashMap[num] = true;
    }

    return false;

        
    }
}
