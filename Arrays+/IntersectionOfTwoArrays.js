var intersect = function(nums1, nums2) {
    
    let obj = {};
    let result = [];

    //make a hashmap of the first array

    for(let i of nums1)
    {
        if(!obj[i])
        {
            obj[i] = 1;
        } else 
        {
            obj[i]++;
        }
    }
    //loop through the second array of nums add see if the hashmap has a count of the value
    for(let i of nums2)
    {
        if(obj[i] > 0)
        {
            result.push(i);
            obj[i]--;
        }
    }

    return result;

}