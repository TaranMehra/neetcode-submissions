class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rStart = 0, rEnd = matrix.length;
        let selectedRow = null;
        while(rEnd > rStart){
            let mid = rEnd + Math.floor((rStart - rEnd) / 2);
            if(matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1 ] >= target){
            // console.log("mid is : ", mid);
                selectedRow = matrix[mid];
                break;
            }
            else if(matrix[mid][0] > target){
                rEnd = mid;
            }
            else if(matrix[mid][0] < target){
                rStart = mid + 1;
            }
        }
        // console.log("selectedRow :", selectedRow)
        if(selectedRow === null){
            return false;
        }

        let low = 0, high = selectedRow.length, length = selectedRow.length;
        
        // let i =
        while(low < high){
            let mid = low + Math.floor((high - low) / 2);
            // if(selectedRow[mid] === target){
            //     // console.log("element found")
            //     return true;
            // }
            if(selectedRow[mid] > target){
                high = mid;
                // console.log("high :",selectedRow[mid])
            }
            else{
                low = mid + 1;
                // console.log("low :",selectedRow[mid])
            }
            length = length - 1;
            // else{
                // return false;
            // }
        }
            return low > 0 && selectedRow[low - 1] === target ? true : false;
    }
}
