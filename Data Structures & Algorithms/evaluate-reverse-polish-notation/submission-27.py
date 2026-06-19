class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        res = []
        for token in tokens : 
            if token in ["*","+","/","-"] :
                b = int(res.pop())
                a = int(res.pop())
                match token :
                    case "*" : 
                        res.append(a*b)
                    case "-" : 
                        res.append(a-b)
                    case "+" : 
                        res.append(a+b)
                    case "/" : 
                        res.append(int(a/b))
            else : 
                res.append(int(token))
        
        return res[-1]