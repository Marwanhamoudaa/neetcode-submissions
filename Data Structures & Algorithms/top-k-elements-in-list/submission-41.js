class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      
    let reapeats = {}
    for (let num of nums) {
        if (reapeats[num]) {
            reapeats[num] += 1
        } else {
            reapeats[num] = 1
        }
    }

   return Object.entries(reapeats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num, k]) => Number(num));

    }
}
