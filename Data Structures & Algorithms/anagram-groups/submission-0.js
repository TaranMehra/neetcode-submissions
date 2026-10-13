class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashtable = new Map();
        for(let i=0; i<strs.length; i++){
            let strarr = [...strs[i]]; //complexity O(m) -> where m is the length of string
            let sortedString = strarr.sort().join('');
            
            if(hashtable.has(sortedString)){
                hashtable.get(sortedString).push(strs[i]);
            }
            else{
                hashtable.set(sortedString, [strs[i]]);
            }
        }
        // console.log("hashtable is : ",  hashtable)
        let data = [...hashtable.values()] 
        return data;

    }
}

const Sol = new Solution();
const result = Sol.groupAnagrams(["act","pots","tops","cat","stop","hat", "taran", "stopcat"]);
// console.log(result)