class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {


    let sorted = nums.sort((a, b) => a - b);
    let res = []
    let a = 0
    while(a < nums.length - 2 ) {
        if(sorted[a] === sorted[a-1]){
            a ++ ; 
            continue
        }
        let b = a + 1
        let c = nums.length  - 1
        while (b < c ) {
            
            let curr = sorted[a] + sorted[b] + sorted[c]
            if( curr == 0 ){
                res.push([sorted[a] , sorted[b] , sorted[c]])
                b ++ ; 
                c -- ; 
                while (b < c  && sorted[b] == sorted[b-1]) {
                    b ++ ;
                } 
                while (b < c  && sorted[c] == sorted[c+1]) {
                    c-- ;
                } 
            }else if (curr < 0 ) {
                b ++
            }else if (curr > 0 ) {
                c --
            }
        }
        a ++

    }
    return res        
    }
}
