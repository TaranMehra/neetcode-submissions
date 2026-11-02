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
        while(length > 0){
            let mid = low + Math.floor((high - low) / 2)
            // console.log("when mid :", mid);
            if(nums[mid] == target){
                return mid;
            }
            else if(nums[mid] > target){
                high = mid;
            }
            else if(nums[mid] < target){
                low = mid;
            }
            length = length - 1;
        }
        return -1;
        
        
    }
}
