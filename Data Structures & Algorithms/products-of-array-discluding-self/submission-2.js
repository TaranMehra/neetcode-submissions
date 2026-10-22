class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       let ans = [];
    
            let prefixProduct = 1;
            let postProduct = 1;
            let prefixArr = [];
            let postArr = [];
            for(let i=0; i<nums.length; i++){
                prefixArr.push(prefixProduct)
                postArr.push(postProduct);
                prefixProduct *= nums[i];
                postProduct *= nums[nums.length - i -1 ];
                
            }
            
            // console.log("prefixArr : ", prefixArr)
            // console.log("postArr : ", postArr.reverse())
            for(let i =0 ; i < prefixArr.length ; i++){
                let one = prefixArr[i] * postArr[prefixArr.length - i -1];
                ans.push(one);
                }

        return ans;
    }
}