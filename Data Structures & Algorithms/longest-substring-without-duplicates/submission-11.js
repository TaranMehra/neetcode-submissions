
class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l=0, r = l;
        let duplicate = new Set();
        if(s.length == 0) return 0;
        let longestStrNum = duplicate.size;
        for(let i=0; i < s.length ; i++){
            while(duplicate.has(s[r])){
                let isdeleted = duplicate.delete(s[l]);
                l++;
            }
            duplicate.add(s[r]);
            r++;
            longestStrNum = Math.max(longestStrNum, r-l);
        
        }
        //     if(longestStrNum > r - l){
        //             longestStrNum = longestStrNum
        //         }
        //         else{
        //             longestStrNum = r-l;
        //         }
        
        return longestStrNum;
        

    }
}
