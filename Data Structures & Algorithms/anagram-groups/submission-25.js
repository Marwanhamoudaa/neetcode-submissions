class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hash = {}
        for (let str of strs ) {
            let ang = str.split("").sort().join("")
            if (hash[ang]) {
                hash[ang].push(str)
            }else {
                hash[ang] = [str]
            }
        }
        return Object.values(hash)





    
    
    }
}
