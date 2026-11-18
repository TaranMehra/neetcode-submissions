class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l =0, r = l + 1, buy = prices[l], sell = prices[r], profit = sell - buy;
        for(let i = 0; i <= prices.length; i++){
            if(buy > sell){
                buy = sell;
                l++;
                // if(i == prices.length){
                //     return profit >= 0 ? profit : 0;
                // }
            }
            else if(profit < (sell - buy)){
                profit = sell - buy;
                // if(i == prices.length){
                //     return profit >= 0 ? profit : 0;
                // }
            }
            else if(i == prices.length || sell == undefined ){
                    return profit >= 0 ? profit : 0;
                } 
            // else{
                
            // }
            r++;
            sell = prices[r];
        }
    }
}
