from collections import defaultdict
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        row = defaultdict(set)
        coulomn = defaultdict(set)
        block = defaultdict(set)
        for i in range (9) :
            for j in range(9):
                if board [i][j] == "." :
                    continue 
                if board [i][j] in coulomn[i] :
                    return False 
                if board [i][j] in row[j] :
                    return False
                if board [i][j] in block[(i//3),(j//3)] :
                    return False
                else :
                    coulomn[i].add(board [i][j])
                    row[j].add(board [i][j])
                    block[(i//3),(j//3)].add(board [i][j])
        
        return True