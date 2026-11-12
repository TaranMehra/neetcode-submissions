class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        
        // let set = new Set();
        let box = new Map();
        let coltable = new Map();
        
        // box.set(set);
        
        for(let row =0; row < board.length; row++){
            console.log(`row no : ${row}`);
            let rSet = new Set();
            
            for(let col =0; col < board[0].length; col++){

                // check for rows
                if(rSet.has(board[row][col]) && Number(board[row][col])){
                    return false;
                }
                rSet.add(board[row][col]);

                let boxno = Math.floor(row/3) * 3 + Math.floor(col/3);

                if(!box.has(boxno)){
                    box.set(boxno, new Set());
                }
                if(!box.get(boxno).has(board[row][col]) && Number(board[row][col])){
                    box.get(boxno).add(board[row][col]);
                    
                }
                else if(box.get(boxno).has(board[row][col]) && Number(board[row][col])){
                    return false;
                }
                
                
                if(!coltable.has(col)){
                    coltable.set(col, new Set());
                }
                // else{
                    // console.log("is Execute or not ? ");
                    if(coltable.get(col).has(board[row][col]) && Number(board[row][col])){
                        // console.log(coltable.get(col).has(board[row][col]) && Number(board[row][col]))
                       return false; 
                    }
                    else if(Number(board[row][col])){
                        coltable.get(col).add(board[row][col]);
                    }
                // }

                // if(rCol?.has(board[col][row])){
                //     return false;
                // }
                // rCol.add(board[row][col]);
            }
            // console.log("rows set : ", rSet);
        // console.log("coltable : ", coltable)
        }
        // console.log("box :", box);

        return true;
    }
}
