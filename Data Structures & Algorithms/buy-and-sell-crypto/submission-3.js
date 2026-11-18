class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l =0, r = l + 1, buy = prices[l], sell = prices[r], profit = sell - buy;
        // console.log(prices.length, prices[prices.length - 1])
        for(let i = 0; i <= prices.length; i++){
            // console.log(`when i= ${i}  buy : ${buy}, sell : ${sell} , profit : ${profit}`);
            if(buy > sell){
                buy = sell;
                l++;
                // r++;
                // console.log("buy > sell")
                // sell = prices[r];
                if(i == prices.length){
                    return profit >= 0 ? profit : 0;
                }
            }
            else if(profit < (sell - buy)){
                profit = sell - buy;
                // r++;
                // sell = prices[r];
                // console.log("profit < (sell - buy)", i)
                if(i == prices.length){
                    return profit >= 0 ? profit : 0;
                }
            }
            else{
                // console.log("else", sell);
                if(i == prices.length || sell == undefined ){
                    // console.log("else of if worked")
                    return profit >= 0 ? profit : 0;
                }
                // else{
                //     // console.log("Else of Else", sell ,"to", prices[r+1]);
                //     r++;
                //     sell = prices[r];
                // }
            }
            r++;
            sell = prices[r];
        }
    }
}
