class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let Obj = {};
        let bucketSort = Array.from({length: nums.length + 1}, ()=> []);
        for(let el of nums){
            Obj[el] = (Obj[el] + 1) || 1;
        }
        // console.log(Obj);

        // console.log(bucketSort)
        for(let n in Obj){
            bucketSort[Obj[n]].push(parseInt(n));
        }

        let ans = [];

        for(let i=bucketSort.length -1 ; i > 0 ; i--){
            // console.log("is that ",  bucketSort[i]);
            for(let n of bucketSort[i]){
                ans.push(n);
                if(ans.length === k){
                    return ans;
                }

            }
        }
        return ans;
    }
}
