class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }

        let hash = {}
        for (let c of s ) {
            hash[c] = hash[c] + 1 || 1 
        }
        for (let c of t) {
            if (hash[c]==0 || hash[c] == undefined ) {
                return false 
            }
            hash[c] -- ;
        }
        return true

    }
}
