
const missingNumber = function(nums) {


    let sumIfNoneMissing = nums.length;
    let actualSum = 0;

    for (let i = 0; i < nums.length; i++) {
        sumIfNoneMissing += i;
        actualSum += nums[i]
    }

    return sumIfNoneMissing - actualSum

};

console.log(missingNumber([0,1]))
//https://www.youtube.com/watch?v=4LrVhAxJUsA