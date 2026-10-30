class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let total = "";
        for(let i=0; i<strs.length; i++){
            total += strs[i].length;
            total += '#';
            total += strs[i];
        }
        return total;
    }
    

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let ans = [];
        for(let i=0; i < str.length;){
            let j = i;
            while(str[j] !== '#'){
                j++;
            }

            let length = parseInt(str.substring(i, j));
            i = j + 1;
            j = length + i;
            let word = str.substring(i, j);
            ans.push(word);
            i = j;

        }
        return ans;
    }
}
