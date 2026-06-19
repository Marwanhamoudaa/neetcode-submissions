class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // {{letter : count} : [words]}
        let anagrams = {}
        for (let str of strs){
            const sorted = str.split("").sort().join("")
          if(!anagrams[sorted]) {
            anagrams[sorted] = []
          }
          anagrams[sorted].push(str)
        }
        return  Object.values(anagrams)

    }
}
