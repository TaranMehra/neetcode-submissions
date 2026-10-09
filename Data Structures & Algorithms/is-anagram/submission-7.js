class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sArr = [...s];
        let tArr = [...t];
        if(sArr.sort().join('')== tArr.sort().join('')){
            return true;
        };
        return false;
    }
}

const Sol = new Solution();
const result = Sol.isAnagram('ria','aira');
console.log(result)