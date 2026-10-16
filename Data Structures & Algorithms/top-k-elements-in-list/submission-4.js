class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let Obj = {}
        // counting elment to make a frquency element map 

        for(let i=0; i<nums.length; i++){
           let element = nums[i];
           if(Obj[element] > 0){
                let frequency = Obj[element];
                Obj[element] = frequency + 1;
           }
           else{
             Obj[element] = 1;
           }
        }

        // bucket sort
        let arr = Object.entries(Obj); //suitable to apply bucket sort;
        let freq = Object.values(Obj).sort((a,b)=> a-b)
        let arrIndex = Array(freq.length - 1 );
        let indexFreqArray = arr.map(([number, frequency])=>{
            if(arrIndex[frequency]?.length >= 1){
                    arrIndex[frequency].push(number);
                }
                else{
                    arrIndex[frequency] = [number];
            }
            
        });

        let arrIndexflat = arrIndex.flat();
        console.log("arrIndexFlat :", arrIndexflat)
        let ans = [];
        for(let i=0; i<k; i++ ){
            ans.push(Number(arrIndexflat[(arrIndexflat.length  - 1)- i]));
        }
        return ans.reverse();

    }
}