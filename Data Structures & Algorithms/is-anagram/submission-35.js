class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // return s.split('').sort().join("") === t.split('').sort().join("")
        if (s.length !== t.length ) return false
        const obj = new Map()
        for (let char of s ) {
            obj.set(char , obj.get(char) + 1 || 1 )
        }
        for (let char of t)  {
            if (obj.get(char) == 0 || obj.get(char) == undefined ) return false 
            obj.set(char , obj.get(char) - 1 ) ; 
        }
        return true 


    }
}
