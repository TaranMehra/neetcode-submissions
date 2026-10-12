class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
        console.log(nums.length)
     */
    hasDuplicate(nums) { 
        
        let arr = [];
        for(let i=0; i< nums.length; i++){
            for(let j=0; j< arr.length; j++){
                // console.log(`arr[${j}] is ${arr[j]}`)
                if(nums[i] === arr[j]){
                     
            // console.log(`The array is : ${arr[j]} and ${nums[i]}`)
                    return true
                }
                // else{
                //  }
                //  console.log('full array of arr', ...arr)
            }
                 arr[arr.length] = nums[i];
        }
                return false;
    }
}

//  const fn = new Solution();
//  fn.hasDuplicate([1,2,3,4,5]);