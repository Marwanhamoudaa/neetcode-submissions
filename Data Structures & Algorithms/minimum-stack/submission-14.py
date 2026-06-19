class MinStack:

    def __init__(self):
        self.MainStack = []
        self.MinStack = []

    def push(self, val: int) -> None:
        self.MainStack.append(val)
        if self.MinStack :
            self.MinStack.append(min(val , self.MinStack[-1]))
        else :
            self.MinStack.append(val)

    def pop(self) -> None:
        if self.MainStack:
            self.MainStack.pop()
            self.MinStack.pop()
            return

    def top(self) -> int:
        if self.MainStack :
            return self.MainStack[-1]
        else : 
            return None

    def getMin(self) -> int:
        if self.MinStack :
            return self.MinStack[-1]
        else : 
            return None


        
