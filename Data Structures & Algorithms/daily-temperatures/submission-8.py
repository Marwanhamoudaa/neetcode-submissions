class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack = [] #=> unknown days 
        res = [0 for i in range (len (temperatures))]
        for i in range (len(temperatures)) :
            while stack and temperatures[i] > temperatures[stack[-1]] :
                PrevDay = stack.pop()
                res[PrevDay] = i - PrevDay 
            stack.append(i)
        return res