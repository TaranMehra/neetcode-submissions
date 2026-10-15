class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashtable = new Map();
        let valueKeyHashTable = new Map();
        let freqArrUnsorted = [];
        let uniqueSet = new Set(nums);
        for(let i=0; i< nums.length; i++){ //n
            if(hashtable.has(nums[i])){
                let v = hashtable.get(nums[i]);
                hashtable.set(nums[i], v + 1);
            }
            else{
                    hashtable.set(nums[i], 1);
                }
        }
        let ans = [];
        hashtable.forEach((key, value)=>{  //n
            if(valueKeyHashTable.has(key)){
                let arrVal = valueKeyHashTable.get(key);
                arrVal.push(value);
            }
            else{
                valueKeyHashTable.set(key, [value]);
            }
            freqArrUnsorted.push(key)
        })

        // console.log("hashtable : ", hashtable);
        // console.log("valueKeyHashTable : ", valueKeyHashTable);
        let freqArrSorted = freqArrUnsorted.sort((a,b)=> a-b).reverse(); //n
        // console.log("freqArrSorted : ", freqArrSorted);
        

        for(let i=0; i<k;){
            
            // console.log("the element ", freqArrSorted[i])
            if(valueKeyHashTable.has(freqArrSorted[i]) && valueKeyHashTable.get(freqArrSorted[i]).length > 1){
                // if(valueKeyHashTable.get(freqArrSorted[i].length > 1)){

                // }
                // for( let j = 0; j < i )
                valueKeyHashTable.get(freqArrSorted[i]).reverse().map((value)=>{
                    if(i<k){
                        ans.push(value);
                        i = i + 1;
                    }
                    // console.log("the value of i : is ", i);
                    // return 
                    // return i > k  ? '' : '' ;
                })
                // console.log("when both are ture: ", i = i + valueKeyHashTable.get(freqArrSorted[i]).length);
                // ans.push(valueKeyHashTable.get(freqArrSorted[i]));
            }
            else{
                // console.log("Else part : ", i);
                ans.push(valueKeyHashTable.get(freqArrSorted[i])[0]);
                i = i + 1;

            }
        }

        return ans;
    }
}
