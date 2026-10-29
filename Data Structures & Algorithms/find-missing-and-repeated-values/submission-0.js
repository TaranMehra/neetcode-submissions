class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        let bSort = Array.from({length: 1 + (grid.length * grid.length)},()=> undefined);
        // console.log(bSort);
        let set = new Set();
        let duplicate;
        for(let i=0; i<grid.length; i++){
            for(let j=0; j<grid[i].length; j++){
                if(set.has(grid[i][j])){
                    duplicate = grid[i][j];
                }
                else{
                    set.add(grid[i][j]);
                    bSort[grid[i][j]] = grid[i][j];
                }
            }
        }
        
        // console.log(bSort);
        let missing = bSort.lastIndexOf(undefined);
        return [duplicate, missing];

    }
}
