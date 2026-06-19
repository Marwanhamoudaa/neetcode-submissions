class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0 
        min_day = 101 
        for i in range(len(prices)) :
            profit = max(profit , (prices[i]-min_day))
            min_day = min(min_day , prices[i])
        return profit 


    