class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
    //    windowSize - maxfreq  == k 
    let count = new Map()
    let left = 0 
    let max = 0 
    for (let r = 0 ; r < s.length ; r ++ ) {
        count.set(s[r] , (count.get(s[r]) || 0 ) + 1 )
        while(r - left + 1 - Math.max(...count.values()) > k ){
            count.set(s[left] , (count.get(s[left])) - 1 )
            left ++ ;
        } 
        max = Math.max(max , r - left + 1 )
    }

    return max
    }
}
