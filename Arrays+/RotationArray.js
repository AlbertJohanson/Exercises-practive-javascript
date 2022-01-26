var rotate = function(nums, k) {

    //Simple Solution
    /* if(k == 0) return;
    if(nums == null || nums.length == 0) return;


    for(let i =0; i < k; i++){
        let j = nums.length -1;
        let temp = nums[j];
        for(; j > 0; j--){
            nums[j] = nums[j-1];
        }

        nums[0] = temp;
    }


    return nums; */

    //Better Solution with extra space

    if(k == 0) return;
    if(nums == null || nums.length == 0) return;


    let res = new Array(nums.length);

    for(let i =0; i<nums.length; i++){
        let newIndex = (i+k)%nums.length;
        res[newIndex] = nums[i];
    }

    for(let i=0; i<nums.length; i++){
        nums[i] = res[i];
    }

    return nums;
}