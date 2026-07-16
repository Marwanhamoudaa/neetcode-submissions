class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // return s.split('').sort().join("") === t.split('').sort().join("")
        if (s.length !== t.length ) return false
        const obj = {}
        for (let char of s ) {
            obj[char] =  obj[char] + 1 || 1
        }
        for (let char of t)  {
            if (obj[char] == 0 || obj[char] == undefined ) return false 
            obj[char] -- ; 
        }
        return true 


    }
}
