

const threeSum = function (nums) {

    let [ solution, left, rigth ] = [[], 0 , nums.length - 1]

    if(nums.length < 3) return solution

    nums.sort((a, b) =>  a-b); // [-4, -1, -1, 0, 1, 2]

    for (let [index, number] of nums.entries()) {
        if(number > 0) return solution;

        if(number === nums[index - 1]) continue;
        // number +4
        left = index + 1; //-1
        rigth = nums.length-1;// 2

        let temp = 0;

        while(left < rigth) {
            temp = number + nums[left] + nums[rigth]

            if(temp === 0) {
                solution.push([number, nums[left], nums[rigth]])
                left++;
                rigth--;

            while(left < rigth && nums[left] == nums[left-1]){
                left++;
            }
            while(left < rigth && nums[rigth] == nums[rigth+1]){
                rigth--;
            }
            } else if (temp > 0) {
                rigth --;
            }else if (temp < 0) {
                left++;
            }
        }
    }
    return solution
}

console.log(threeSum([0]))