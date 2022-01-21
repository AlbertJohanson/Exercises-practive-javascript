const combinationSum2 = function(candidates, target) {
      //Brute force =>  2^n

      candidates.sort((a,b) => a-b)

      //Back Tracking
      //sum =>  current sum of tem result
      //index => starting point, avoid duplicate checks
      //tmp => temporary result
      const result = []
  
      const walk = (sum,index, temp) => {
          //check if satisfies the condition
  
          if(sum >= target) {
              if(sum === target) {
                  result.push(temp)
              }
              return true
          }
  
          //if not we could add more numbers in it
          //if all is ones 
          for (let i = index; i < candidates.length; i++) {
              //avoid duplicate results
              const num = candidates[i]

              if(i > index && num === candidates[i-1]) continue
              
  
              const shouldEnd = walk(sum + num, i + 1, temp.concat(num))
              if(shouldEnd) {
                  break
              }
          }
  
          return false
      }
  
      walk(0, 0 , [])
  
      return result
};

console.log(combinationSum2([10,1,2,7,6,1,5],8))

//https://www.youtube.com/watch?v=0gY2ji6K66c