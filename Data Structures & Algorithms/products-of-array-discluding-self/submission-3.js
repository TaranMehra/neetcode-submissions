class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pre = 1;
        let post = 1;
        let postArr = [];
        let preArr = [];
        for(let i=0; i< nums.length; i++){
            postArr.push(post);
            preArr.push(pre);
            pre *= nums[i];
            post *= nums[nums.length - i -1];
        }

        postArr.reverse();
        let ans = [];
        for(let i=0; i<nums.length; i++){
            let sum = preArr[i] * postArr[i];
            ans.push(sum);
        }
        return ans;
    }
}
