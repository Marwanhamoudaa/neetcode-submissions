class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
let stack = []
    let res = new Array(temperatures.length).fill(0)
    for(let day in temperatures) {
        while (stack.length > 0 && temperatures[day] > temperatures[stack[stack.length -1 ]] ) {
            let prevDay = stack.pop()
            res[prevDay] = day - prevDay
        }
        stack.push(day)
        
    }
    return res

        

    }
}
