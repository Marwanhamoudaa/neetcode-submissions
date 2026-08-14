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
        const stack = [] 
            for (let item of s) {
            if (
                item === "(" ||
                item === "{" ||
                item === "["
            ) { 
                stack.push(item)
            }else{
                let top = stack.pop()
                if(map[item] !== top ) return false 
            }
        }
        return stack.length == 0
    
    }
}
