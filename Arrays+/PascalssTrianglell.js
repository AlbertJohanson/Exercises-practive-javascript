
const getRow = function(rowIndex) {
     var result = [1];

     for (let i = 0; i < rowIndex; i++) {
         for (var j = result.length-1; j > 0; j--) {
             
            result[j] = result[j] + result[j-1]
         }
         result = result.concat(1)
     }
     return result
}

console.log(getRow(3))