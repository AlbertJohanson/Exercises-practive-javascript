var maxProfit = function(prices) {
    let index = 0;
    let valley = prices[0];
    let peak = prices[0];
    let maxProfit = 0;

    while(index < prices.length - 1){
        
        while(index < prices.length - 1 && prices[index] >= prices[index + 1]) index++;
        valley = prices[index];
        
        while(index < prices.length - 1 && prices[index] <= prices[index + 1]) index++;
        peak = prices[index];
        
        maxProfit += peak - valley;
    }
    return maxProfit;
}



console.log(maxProfit([7,1,5,3,6,4]));