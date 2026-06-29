class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0 
        let charSet = new Set()
        let left = 0 
        let right = 0 
        while (right < s.length) {
            while(charSet.has(s[right])){
                charSet.delete(s[left])
                left ++ 
                
            }


            charSet.add(s[right])
            max = Math.max(max , charSet.size)
            right ++ 
            

        }

        return max


    }
}
