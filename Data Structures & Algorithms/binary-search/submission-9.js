class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let first = 0 
        let last = nums.length -1 

        while (first <= last) {
            const mid = Math.floor((first+last) / 2 )
            if(nums[mid] == target) {
                return mid
            }else if (nums[mid] > target) {
                last = mid - 1 
            }else {
                first = mid + 1
            }
        }
        return -1


    }
}
