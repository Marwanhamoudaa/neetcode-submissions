class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    alphaNum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
    isPalindrome(s) {
        let right = s.length - 1 
        let left = 0 
        while (left < right) {
            while(left < right && !this.alphaNum(s[left])) {
                left ++ ;
            }
            while(left < right && !this.alphaNum(s[right])) {
                right -- ;
            }
            if (s[left].toLowerCase() != s[right].toLowerCase()) return false
            left ++ 
            right -- 
        }
        return true 
    
    }
}
