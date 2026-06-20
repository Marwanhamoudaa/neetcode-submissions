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
        let left = 0 
        let right = s.length - 1 
        while (left < right) {
            while (left < right && !this.alphaNum(s[left])) {
                left += 1 
            }
            while (left < right && !this.alphaNum(s[right])) {
                right -= 1 
            }

            if (s[left].toLowerCase() != s[right].toLowerCase()) {
                return false
            }
            left ++ ; 
            right -- ; 


        }
    return true 
    }
}
