class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false 

        const hash = {} 
        for (let char of s ) { 
            hash[char] = hash[char] + 1 || 1 
        }
        for (let char of t) {
            if (hash[char] == 0 || hash[char] == undefined) return false 
            hash[char] -- ;
        }
        return true

    }
}
