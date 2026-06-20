class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

            let numSet = new Set(nums)
    let longest = 0
    for (let num of numSet) {
        if (numSet.has(num - 1)) {
            continue
        }
        let currentNum = num
        let current = 1
        while (numSet.has(currentNum + 1)) {
            current += 1
            currentNum += 1
        }
        longest = Math.max(longest, current)
    }
    return longest

    }
}
