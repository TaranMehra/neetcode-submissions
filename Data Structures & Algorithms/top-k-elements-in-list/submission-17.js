class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let Objhash = {};
        let bSort = Array.from({length: nums.length + 1} , ()=> []);
        for(const n of nums){
            Objhash[n] = (Objhash[n] || 0) + 1;
        }
        for(let n in Objhash){
            bSort[Objhash[n]].push(n);
        }

        let i=0;
        let ans = []
        for(let i= bSort.length -1; i > 0; i--){
            for(const n of bSort[i]){
                ans.push(n);
                if(ans.length === k){
                    return ans;
                }
            }
        }
    }
}
