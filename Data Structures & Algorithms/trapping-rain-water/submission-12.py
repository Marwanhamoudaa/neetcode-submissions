class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)
        left = 0
        right = n - 1
        sum_water = 0
        frames = []
        left_max = 0
        right_max = 0

        while left <= right:
            if height[left] < height[right]:
                if height[left] >= left_max:
                    left_max = height[left]
                else:
                    trapped = left_max - height[left]
                    sum_water += trapped
                    frames.append((left, right, list(height), left_max, right_max, sum_water))
                left += 1
            else:
                if height[right] >= right_max:
                    right_max = height[right]
                else:
                    trapped = right_max - height[right]
                    sum_water += trapped
                    frames.append((left, right, list(height), left_max, right_max, sum_water))
                right -= 1

        return sum_water

