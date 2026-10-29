class Solution {
    /**
     * @param {number[]} arr1
     * @param {number[]} arr2
     * @return {number}
     */
    longestCommonPrefix(arr1, arr2) {
        let hashSet = new Set();
        for(let n of arr1){
            while(n){
                if(!hashSet.has(n)){
                    hashSet.add(n);
                    n = Math.floor(n / 10);
                }else{
                    break;
                }
            }
        }

        let ans = [];
        for(let n of arr2){
                    // console.log(n);
            while(n){
                if(hashSet.has(n)){
                    ans.push(String(n).length);
                    break;
                }
                n = Math.floor(n / 10);
            }
        }
        return Math.max(...ans) > 0 ? Math.max(...ans) : 0;

        // if(Math.max(ans)){
        //      return Math.max(ans)
        // }
        // else if(Math.max(ans) === 0){
        //     return Math.max(ans);
        // }
        // else{
        //     return ans[0];
        // }
    }
}
