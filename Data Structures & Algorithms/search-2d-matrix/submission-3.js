class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let set = new Set (matrix.flat())
        return  set.has(target)
    }
}
