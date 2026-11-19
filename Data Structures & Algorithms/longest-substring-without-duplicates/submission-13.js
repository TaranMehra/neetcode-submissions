
class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l=0;
        let duplicate = new Set();
        if(s.length == 0) return 0;
        let longestStrNum = duplicate.size;
        for(let r=0; r < s.length ; r++){
            while(duplicate.has(s[r])){
                let isdeleted = duplicate.delete(s[l]);
                l++;
            }
            duplicate.add(s[r]);
            longestStrNum = Math.max(longestStrNum, r-l +1);
        
        }
        
        return longestStrNum;
        

    }
}
