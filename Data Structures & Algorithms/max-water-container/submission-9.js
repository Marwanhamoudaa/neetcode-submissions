class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

            let max = 0 
    let left = 0 
    let right = heights.length - 1 
    while (left < right ) {
        let h = Math.min(heights[left] , heights[right])
        let newArea = (right - left ) * h 
        max = Math.max(max , newArea)
       
        if (heights[left] < heights[right]){
            left ++
        }else {
            right --
        }
        

    }
    return max
    }
}
