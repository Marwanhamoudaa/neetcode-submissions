class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length 
        let cols = matrix[0].length 
        // col => 4 , rows => 3

        // loop on rows 
        let top = 0 
        let bot = rows - 1 
        while (top <= bot) {
            let targetRow = Math.floor((bot+top ) / 2 )

            if(matrix[targetRow][cols - 1 ] < target  ){
                top = targetRow + 1 
            }else if (matrix[targetRow][0] > target  ) {
                bot = targetRow - 1 
            }else{
                break
            }
        }
         if (!(top <= bot)) {
            return false;
        }
        let row = Math.floor((bot + top) / 2 )
                let l = 0;
        let r = cols - 1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (target > matrix[row][m]) {
                l = m + 1;
            } else if (target < matrix[row][m]) {
                r = m - 1;
            } else {
                return true;
            }
        }
        return false;


    }
}
