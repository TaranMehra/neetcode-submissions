class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let requiredMap = new Map();
        for(let i=0; i< nums.length; i++){
            // console.log("finding requriedNum is :", requriedNum)
            // if(nums[i] == target){
            //     return [i];
            // }
             if(requiredMap.has(nums[i])){
                // console.log("got it at : i", i);
                return [ requiredMap.get(nums[i]), i];
            }
            else{
                let requriedNum  =  target - nums[i];
                requiredMap.set(requriedNum, i);
            }
            
        } 
        console.log(requiredMap);
    }
}


const Sol = new Solution();
// const result = Sol.twoSum([-4,5,5,16,-6, -5], -11);
const result = Sol.twoSum([0,4,3,0],0);

// console.log(result)