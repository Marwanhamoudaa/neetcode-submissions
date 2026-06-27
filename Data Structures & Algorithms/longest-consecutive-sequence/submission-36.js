class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0 
        let newNums = new Set (nums)
        for (let num of nums) {
            if(newNums.has(num - 1 )){
                continue
            }
            let current = 1 
            while (newNums.has(num + 1 )) {
                current += 1 
                num += 1
            }
            longest = Math.max(current , longest)


        }
        return longest 
        

    }
}
