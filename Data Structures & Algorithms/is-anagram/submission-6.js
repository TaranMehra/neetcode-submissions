class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let hashMap = new Map();
        let sArr = [...s];
        let tArr = [...t];

        if(s.length !== t.length)
            return false;
        
        //storing values
        for(let i=0; i < sArr.length; i++){
            if(hashMap.has(sArr[i])){
                let v = hashMap.get(sArr[i]);
                // console.log(`value : ${v} at ${hashMap.get(sArr[i])}`);
                v=v+1;
                hashMap.set(sArr[i], v);
            }
            else{
                hashMap.set(sArr[i], 1);
            }
        }

        // console.log('hashMap hasing of sArr : ', hashMap);

        // checking is anagram
        for(let i=0; i < t.length ; i++){
            // console.log(`${i} times when ${tArr[i]}`)
            // console.log('hashMap at start of if-else : --------------', hashMap)
            
            if(hashMap.has(tArr[i])){
                let v = hashMap.get(tArr[i]);
                let existDelete = false;
                if(v == 1){
                    // console.log("v==0 case is executed at ", hashMap)
                    let existDelete = hashMap.delete(tArr[i]);
                    // console.log("hasMap.delete case is executed at0000000000 ", hashMap)
                }

                else if(!existDelete){
                    v = v - 1;
                    hashMap.set(tArr[i], v);
                    // console.log("hasMap.set case is executed at0000000000000 ", hashMap)
                }

            }
            else{
                return false;
            }
            // console.log('hashMap at end of if else ----------- : ', hashMap)

        }
            return true;
    }
}
const Sol = new Solution();
const result = Sol.isAnagram('cbbcc','bccbc');
// console.log(result)


