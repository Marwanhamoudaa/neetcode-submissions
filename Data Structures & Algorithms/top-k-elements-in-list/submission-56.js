class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       const map = new Map() 
    //    key => num ; val => freq 
        for (let num of nums) {
            map.set(num , map.get(num) + 1 || 1 )
        }
        // [   [num , freq ] , ...  ]
        return [...map.entries()]
        .sort((a , b ) => b[1] - a[1])
        .slice(0 , k ) 
        .map((a) =>  a[0] )
    }
}
