class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        # 1 . calc each car time to reach target 
        # 2 . sorting by distance 
        # 3 . loop from the nearest + count fleets 
        TimeStack = []
        cars_data = [[p,s] for p , s in zip(position,speed)]
        for p , s in sorted(cars_data)[::-1] : 
            TimeStack.append((target - p)/s)
            while len(TimeStack) >= 2 and TimeStack[-1] <= TimeStack[-2] : 
                TimeStack.pop()
        return len(TimeStack)

        