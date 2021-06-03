
const fourSum = function(nums, target) {

    const result = []

    if(nums.length < 4) return result

    //(logN)
    nums.sort((a,b) => a-b)

    for(let i = 0; i < nums.length - 3; i++) {
        //Skip the same numbers
        if(nums[i] === nums[i - 1]) continue


        for(let j = i + 1; j < nums.length - 2; j++) {
            if(j > i + 1 && nums[j] == nums[j - 1]) continue

            let k = j + 1
            let l =  nums.length - 1

            while (k < l) {
                const sum  = nums[i] + nums[j] + nums[k]+ nums[l]

                if(sum === target) {
                    result.push([nums[i], nums[j], nums[k], nums[l]])
                }

                if(sum <= target) {
                    k += 1
                    while (nums[k] === nums[k - 1]) {
                        k += 1
                    }
                }
                if(sum >= target) {
                    l -= 1
                    while (nums[l] === nums[l + 1]) {
                        l -= 1
                    }
                }
            }
        }

        
    }
    return result
}


console.log(fourSum([2,2,2,2,2], 8))