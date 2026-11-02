class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let Objhash = {};
        let bSort = Array.from({length: nums.length + 1} , ()=> []);
        // for(let i=0; i <= nums.length -1; i++){
            // Objhash[nums[i]] = (Objhash[nums[i] + 1] || Objhash[1]);
            // if(Objhash[nums[i]]){
            //     Objhash[nums[i]] = Objhash[nums[i]] + 1;
            // }
            // else{
            //     Objhash[nums[i]] = 1;
            // }
        // }
        for(const n of nums){
            Objhash[n] = (Objhash[n] || 0) + 1;
        }
        for(let n in Objhash){
            bSort[Objhash[n]].push(n);
        }

        // bSort.sort((a,b)=> b-a);
        // bSort.reverse();

        let i=0;
        let ans = []
        // for(let el of bSort){
        //     if(el?.length > 0){


        //     console.log(el);
        //     for(let n of el){
        //         ans.push([bSort[i]]);
        //         if(ans.length == k){
        //             return ans;
        //         }
        //         // i++;
        //     }
        //     }
        // }
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
