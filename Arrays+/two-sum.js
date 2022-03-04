 const twoSum = (nums, target) =>  {

    const comp = {}
    
    for(let i=0; i<nums.length; i++) {
        if(comp[nums[i]] >= 0){
            return [comp[nums[i]],i]
        }
        comp[target-nums[i]] = i
    }
}

console.log(twoSum([2,7,11,15], 9)) 


const twoSumII = (nums, target) => {

    //O(n * logN)

    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        let sum = nums[left] + nums[right]

        if(sum === target) {
            return [left + 1, right + 1]
        }
        if(target > sum) {
            left ++;
        } else 
        {
            right --;
        }
    }

    return [-1, -1]
}

console.log(twoSumII([2,7,11,15], 9)) 

// [2, 7, 11, 15], target = 9
/* l          r */
// [2, 7, 11, 15], target = 17
/* l      r */
// [2, 7, 11, 15], target = 13
/* l   r */
// [2, 7, 11, 15], target = 9, return[1, 2]




