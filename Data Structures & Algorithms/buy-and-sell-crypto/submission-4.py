class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_day = 0
        min_day = 101
        for n in range (len(prices)):
            if prices[n] < min_day :
                min_day = prices[n]
            else:
                max_day = max(max_day , prices[n] - min_day) 
        return max_day
    