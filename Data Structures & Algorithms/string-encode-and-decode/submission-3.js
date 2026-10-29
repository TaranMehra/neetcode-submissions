class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";
        for(let n of strs){
            str += n.length;
            str += '#';
            str += n;
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        let add = [];
        // let word = str.split('#')
        let i=0;
        
        while(i<str.length){
            let j = i ;
            
            while(str[j] !== '#'){
                j++;
            }
            let length = parseInt(str.substring(i,j));
            // console.log('length')
            // console.log(i, j);
            
            i = j+1;
            j= i+ length;
            let word = str.substring(i, j);
            add.push(word);
            i = j ;
        }
        return add;
    }
}
