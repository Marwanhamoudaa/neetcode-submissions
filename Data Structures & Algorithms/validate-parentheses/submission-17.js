class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = {
            ")" : "(" ,
            "}" : "{" , 
            "]" : "[" 
        }
        let stack = []
        for (let item of s ) {
            if (item === "(" ||
            item === "[" ||
            item === "{") {

            stack.push(item);

        }else {

            let top = stack.pop();
            if (top !== map[item]){
                return false
            }


        }

        }
        return stack.length === 0;


    }
}
