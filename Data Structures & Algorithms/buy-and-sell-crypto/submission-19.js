class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0 
        let right = 0 
        let max = 0 
        while (right < prices.length) {
            if(prices[right] < prices[left]) { 
                left = right 
            }else { 
                max = Math.max(max , prices[right] - prices[left])
            }
            right ++
        }
        return max

    }
}
