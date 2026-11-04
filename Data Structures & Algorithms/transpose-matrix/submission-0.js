class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
    transpose(matrix) {
        let row = matrix.length;
        let col = matrix[0].length;
        let tArr = Array.from({ length: col }, () => new Array(row));
        //console.log(tArr);
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                tArr[col][row] = matrix[row][col];

            }
        }
        return tArr;
    }
}
