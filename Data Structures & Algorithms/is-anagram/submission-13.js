class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    let chars1 = {}
    let chars2 = {}
    if (s.length != t.length) {
        return false
    }
    for (let char of s ) {
        chars1[char] ? chars1[char] += 1 :   chars1[char] = 1           
    }
    for (let char of t ) {
        chars2[char] ? chars2[char] += 1 :   chars2[char] = 1           
    }
for (let key in chars1) {
        if (chars1[key] !== chars2[key]) {
            return false;
        }
    }    
    return true

    }
}
