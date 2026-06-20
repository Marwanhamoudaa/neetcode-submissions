class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       let Anagrams = {}
    for (let str of strs) {
        let ang = str.split("").sort().join(" ")
        if (!Anagrams[ang]){
            Anagrams[ang] = [str]
        } else {
            Anagrams[ang].push(str)
        }
    }
    let output = Object.entries(Anagrams).map(([A , B]) => {
        return B
    })
    return output
    }
}
