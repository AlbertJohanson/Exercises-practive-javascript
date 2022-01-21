
const searchRange = function(nums, target) {

    var n = nums.length;
    var bs = function(isLeft) {
        var l=0, r=n;
        while(l<r) {
            var mid= Math.floor((l+r)/2);
            if(nums[mid]>target || (isLeft && nums[mid] == target )){
                r=mid;
            } else {
                l= mid+1;
            }
        }
        return l;
    }

    var begin = bs(true);
    if(begin == n || nums[begin] != target) {
        return [-1, -1]
    }
    var end = bs(false);
    return[begin, end-1];
}

console.log(searchRange([5,7,7,8,8,10],8))

//https://www.youtube.com/watch?v=R0KP1qfX12Y