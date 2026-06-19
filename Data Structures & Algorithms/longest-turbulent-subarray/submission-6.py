class Solution:
    def maxTurbulenceSize(self, arr: List[int]) -> int:
                    
        if len(set(arr)) == 1 :
            return 1
        if len(arr) <= 2 :
            return len(arr)

        count = 2
        max_count = 1
        for i in range (1,len(arr) -1 ) :
                if (arr[i] > arr[i-1] and arr[i] >arr[i+1]) or (arr[i] < arr[i-1] and arr[i] < arr[i+1]) : # i-1 < i > i+1
                        count += 1 
                        max_count = max (max_count,count)
                else :
                    count = 2
        max_count = max(max_count, count)
        return max_count