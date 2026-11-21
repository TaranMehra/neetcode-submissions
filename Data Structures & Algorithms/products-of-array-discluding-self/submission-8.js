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
            postArr[nums.length - i -1] = suffix;
            prefix *= nums[i];
            suffix *= nums[nums.length  - i - 1];

        }
        let ans = [];
        for(let i=0; i<nums.length; i++){
            ans.push(preArr[i] * postArr[i]);
        }
        return ans;
    }
}
