var singleNumber = function(nums) {
    

    if(nums.length === 1) {
        return nums[0];
    }

    let singleNumber = 0;

    nums.forEach(num => {
        singleNumber = singleNumber ^ num;
    })

    return singleNumber;
}