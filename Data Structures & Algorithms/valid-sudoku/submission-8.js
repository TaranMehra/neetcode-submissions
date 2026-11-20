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
                console.log("Number : ", el)

                if(rowSet.has(el) ){//&& typeof rowSet.get(el) == 'number'){
                    // break;
                    return false;
                }
                rowSet.add(el);

                if(!hashCol.has(col)){
                    hashCol.set(col, new Set());
                }
                else if(hashCol.get(col).has(el)){
                    return false ;
                }
                // else{
                    hashCol.get(col).add(el);
                // }

                let boxNo = (Math.floor(row/3) * 3) + Math.floor(col/3);
                // console.log(boxNo);
                if(!hashBox.has(boxNo)){
                    hashBox.set(boxNo, new Set());
                }
                else if(hashBox.get(boxNo)?.has(el)){
                    return false;
                }
                // else{
                    hashBox.get(boxNo)?.add(el)
                // }

            }
            // console.log("rowSet : ", rowSet);
            // console.log("hashCol : ", hashCol);
                console.log("hashBox : ", hashBox);
        }
        return true;
    }
}
