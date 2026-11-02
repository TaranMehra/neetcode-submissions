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
        let set = new Set();
        // let mid ;
        while(low < high ){ //&& !(set.has(mid))){
            let mid = low + Math.floor((high - low) / 2)
            
            // set.has(mid) ? set.add(mid) : ;
            console.log(low,high ,mid, set);
            if(nums[mid] == target){
                return mid;
            }
            else if(nums[mid] > target){
                high = mid;
            }
            else{
                low = mid + 1;
            }
            length = length - 1;
        }
        return -1;
        
        
    }
}
