
const maxProfit = function(prices) {

   let totalProfit = 0;

   if (prices && prices.length && prices.length > 1) {
       for (let i = 0; i < prices.length; i++) {
           if(prices[i+1] - prices[i] > 0) {
               totalProfit = totalProfit + (prices[i+1] - prices[i])
           }
       }
   }
   return totalProfit
}

console.log(maxProfit([7,6,4,3,1]))