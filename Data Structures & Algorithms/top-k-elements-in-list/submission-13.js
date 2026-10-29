class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let Obj = {};
        let bucS = Array.from({length: nums.length} , ()=>[]);
        let ans = [];
        // console.log(ans);
        for(let n of nums){
            Obj[n] = (Obj[n]+1 || 1);
        }
        // console.log("Obj", Obj)
        for(let el in Obj ){
            // bucS[Obj[el]] = ([el]);
            if(bucS[Obj[el]]){
                bucS[Obj[el]].push(el);
            }
            else{
                bucS[Obj[el]] = [el]
            }
        }
        
        bucS.reverse();
        console.log(bucS)
        // bucS.sort((a,b)=> a-b);
        let i=0;
        while(i<bucS.length){
            for(let el of bucS[i]){
            // console.log("el", el);
                ans.push(el);
                if(ans.length == k){
                return ans;
            }

            }
            
            i++;
        }
    }
}
