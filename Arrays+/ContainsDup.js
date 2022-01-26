var containsDuplicate = function(nums) {

    for(let i = 0; i < nums.length; i++)
    {
        if(nums.indexOf(nums[i]) != i)
        {
            return true;
        } 
    }

    return false;
}