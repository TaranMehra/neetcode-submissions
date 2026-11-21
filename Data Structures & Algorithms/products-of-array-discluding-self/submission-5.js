class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1, suffix = 1;
        let preArr = [], postArr = [];
        
        for(let i=0; i<nums.length ; i++){
            preArr.push(prefix);
            postArr.push(suffix);
            prefix *= nums[i];
            suffix *= nums[nums.length  - i - 1];

        }
        let ans = [];
        postArr.reverse();
        for(let i=0; i<nums.length; i++){
            let result = preArr[i] * postArr[i];
            ans.push(result);
        }
        return ans;
    }
}
