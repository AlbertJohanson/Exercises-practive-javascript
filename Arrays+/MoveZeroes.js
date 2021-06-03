
const moveZeroes = function(nums) {
   
    let anchor = 0;

    for(let explorer = 0; explorer < nums.length; explorer++) {
        if(nums[explorer] !== 0) {
            let temp = nums[anchor];
            nums[anchor] = nums[explorer];
            nums[explorer] = temp;

            anchor++;
        }
    }

}

console.log(moveZeroes([0,1,0,3,12]))

//https://www.youtube.com/watch?v=0rPuILjoVsg