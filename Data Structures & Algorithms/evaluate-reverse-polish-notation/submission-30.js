class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
 
     let opperations = new Set(["+", "*", "-", "/"])

    let stack = []
    for (let num of tokens) {
        if (opperations.has(num)) {
            let y = Number(stack.pop())
            let x = Number(stack.pop())
            if (num === "+") {
               stack.push(x + y);
            } else if (num === "-") {
               stack.push(x - y);
            } else if (num === "*") {
               stack.push(x * y);
            } else if (num === "/") {
               stack.push(Math.trunc(x / y));
            }
        }else {
            stack.push(num)
        }
    }
    return stack.pop()   }
}
