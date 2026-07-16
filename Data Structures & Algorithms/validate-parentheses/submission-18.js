class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = {
            "}" : "{" , 
            ")" : "(" , 
            "]" : "["
         }
        let stack = []
        for (let c of s ){
            if (c === "(" || c === "[" || c == "{" ) {
                stack.push(c)
            }else {
                let top = stack.pop()
                if (top !== map[c]) return false 
            }
        }
        return stack.length === 0 
    }
}
