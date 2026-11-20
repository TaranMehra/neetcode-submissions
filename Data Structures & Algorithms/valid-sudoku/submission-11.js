class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let hashBox = new Map();
        let hashCol = new Map();

        for(let row=0; row < board[0].length; row++){
            let rowSet = new Set();
            for(let col=0; col < board[row].length; col++){
                let el =  board[row][col];
                if(el === "."){
                    continue;
                }

                if(rowSet.has(el) ){
                    return false;
                }
                rowSet.add(el);

                if(!hashCol.has(col)){
                    hashCol.set(col, new Set());
                }
                else if(hashCol.get(col).has(el)){
                    return false ;
                }

                hashCol.get(col).add(el);

                let boxNo = (Math.floor(row/3) * 3) + Math.floor(col/3);
                if(!hashBox.has(boxNo)){
                    hashBox.set(boxNo, new Set());
                } 
                else if(hashBox.get(boxNo)?.has(el)){
                    return false;
                }
                hashBox.get(boxNo)?.add(el)
            }
        }
        return true;
    }
}
