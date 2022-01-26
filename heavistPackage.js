function solve(weight0, weight1, weight2) {
    
   return weight0 > weight1 ? weight0  > weight2 ? 0 : 2 : weight1 > weight2 ? 1 : 2;
}