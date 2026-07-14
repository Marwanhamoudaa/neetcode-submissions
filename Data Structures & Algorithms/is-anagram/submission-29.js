class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return s.split('').sort().join(" ") === t.split('').sort().join(" ")
        if (s.length !== t.length) return false
       let chars = {}
    //    key => letter , val => freq
        for (let char of chars ) {
            chars[char] = chars[char] + 1 || 1

        }
    }
}
