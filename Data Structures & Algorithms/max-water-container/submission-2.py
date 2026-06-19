class Solution:
    def maxArea(self, heights: List[int]) -> int:
        left = 0 
        right = len (heights) - 1 
        max_val = 0
        while left < right :
            h = min(heights[left],heights[right])
            area = h *(right - left )
            max_val = max (max_val,area)
            if heights[left] < heights[right]:
                left += 1 
            else : 
                right -= 1 
        return max_val

