//**Kadane’s algorithm**
/*
Simple idea of the Kadane’s algorithm is to look for all positive contiguous segments of the array (max_ending_here is used for this). And keep track of maximum sum contiguous segment among all positive segments (max_so_far is used for this). Each time we get a positive sum compare it with max_so_far and update max_so_far if it is greater than max_so_far */
let allPositives = (nums) => nums.every(n => n > 0);
let allNegatives = (nums) => nums.every(n => n < 0);

let sum = (nums) =>
  nums.reduce((curr_max, max_so_far) => curr_max + max_so_far, 0);

const maxSubArray = function (nums) {

    if(nums.length === 0 || allNegatives(nums)) return 0;
    if(allPositives(nums)) return sum(nums)

  var curr_max = 0,
    max_so_far = 0;

  for (let i = 0; i < nums.length; i++) {
    curr_max = Math.max(0, curr_max + nums[i]);
    max_so_far = Math.max(curr_max, max_so_far);
  }

  return max_so_far;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));



const subArray = (nums) => {
    // initiate two variable, maxSum for total max, sum for current max
    let maxSum = -Infinity
    let currentSum = 0

    // iterate through the nums, store sub-problems result
    for (let i = 0; i < nums.length; i++) {
        //cumulating answers to the top
        
        //compare currentSum add current number 
        //with current number and store the maximum value
        currentSum = Math.max(nums[i], currentSum + nums[i])

        maxSum = Math.max(currentSum, maxSum)
        
    }

    return maxSum
}


console.log(subArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
