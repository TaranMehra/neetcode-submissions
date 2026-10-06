class Solution{
 hasDuplicate(nums){
    const store = new Set();
    for(let i=0; i<=nums.length; i++){
        if(store.has(nums[i])){
           return true;
        }
         store.add(nums[i]);
        
    }
    return false;
};
}
const nums = [1,2,3,3,4]
const sol =  new Solution()
sol.hasDuplicate(nums);
// console.log(Duplicate(nums));