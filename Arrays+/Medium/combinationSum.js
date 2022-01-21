
const combinationSum = function(candidates, target) {
    
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

        for (let i = index; i < candidates.length; i++) {
            const num = candidates[i]
            

            const shouldEnd = walk(sum + num, i, temp.concat(num))
            if(shouldEnd) {
                break
            }
        }

        return false
    }

    walk(0, 0 , [])

    return result
}

console.log(combinationSum([1], 1))

//https://www.youtube.com/watch?v=zagXJO34FMQ