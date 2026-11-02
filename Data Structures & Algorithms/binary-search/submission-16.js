class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0;
        let high = nums.length ;
        let length = nums.length;
        while(low < high ){ 
            let mid = low + Math.floor((high - low) / 2)
            
            if(nums[mid] > target){
                high = mid;
            }
            else{
                low = mid + 1;
            }
            length = length - 1;
        }
        return low > 0 && nums[low -1] === target ? low -1 : -1;
        
        
    }
}
