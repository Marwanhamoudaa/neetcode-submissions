class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
   let hash = {};

    for (let i = 0; i < nums.length; i++) {
        let secNum = target - nums[i];

        if (hash[secNum] !== undefined) {
            return [hash[secNum], i];
        }

        hash[nums[i]] = i;
    }
    }
}
