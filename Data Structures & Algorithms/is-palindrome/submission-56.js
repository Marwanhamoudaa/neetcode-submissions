class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNum(x) {
        return (
             ("A" <= x && x <= "Z")||
             ("a" <=x && x <= "z")||
            ( "0" <=x  && x <= "9")
        )
    }

    isPalindrome(s) {
        let left = 0 ; 
        let right = s.length - 1 ; 

        while (left < right) {
            while (left < right && !this.isAlphaNum(s[left])) {
                left ++ 
            };
            while (left < right && !this.isAlphaNum(s[right])) {
                right -- ;
            }; 
            if(s[left].toUpperCase() !== s[right].toUpperCase()) return false 
            left ++ 
            right --
        }
        return true 


    }
}
