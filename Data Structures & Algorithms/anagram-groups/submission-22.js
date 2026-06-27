class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hash = {}
        // hash = {key => anag : value => [....]}
        for (let str of strs) {
            let anag = str.split('').sort().join('');
            if (hash[anag]){
                hash[anag].push(str)
            }else{
                hash[anag] = [str]
            }
        }
    return Object.values(hash);





    
    
    }
}
