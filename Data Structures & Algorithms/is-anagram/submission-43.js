class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // return s.split("").sort().join("") == t.split("").sort().join("")
        if (s.length !== t.length ) return false
        const map = new Map()
        // key => char : val => freq 
        for (let char of s ) {
            map.set(char , (map.get(char) + 1 || 1))
        }
        for(let char of t) {
            if (map.get(char) == 0 || map.get(char) == undefined ) return false 
            map.set(char , map.get(char) - 1 )
        }
        return true 

    }
}
