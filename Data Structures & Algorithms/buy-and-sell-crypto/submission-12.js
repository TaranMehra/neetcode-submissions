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
            }
            else if(profit < (sell - buy)){
                profit = sell - buy;
            } 
            else if(i == prices.length || sell == undefined ){
                    return profit >= 0 ? profit : 0;
                } 
            r++;
            sell = prices[r];
        }
    }
}
