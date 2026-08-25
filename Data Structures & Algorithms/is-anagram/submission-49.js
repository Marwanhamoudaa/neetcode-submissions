class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false 

        const charHash = new Map() 
        for (let char of s ) {
            charHash.set(char ,charHash.get(char) + 1 || 1 )
        }
        for (let char of t ) {
            if (charHash.get(char) == undefined || charHash.get(char) == 0  )return false 
            charHash.set(char , charHash.get(char) - 1 )
        }
        return true 



    }
}
