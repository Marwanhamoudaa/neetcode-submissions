class Solution:
    def isValid(self, s: str) -> bool:
        OpenStack = [] 
        chars = {")" : "(" , "]" : "[" , "}" : "{"}
        for c in s :
            if c in chars : 
                if OpenStack and OpenStack[-1] == chars[c] :
                    OpenStack.pop()
                else : 
                    return False 
            else :
                OpenStack.append(c)
        return True if not OpenStack else False 




