

//[4,5,6,7,,80,1,2].

//left = 4 || 8

//rigth = 7 || 2

//mid = 5 || 0

//target = 8

const search = function(nums, target) {
    let left = 0
    let rigth = nums.length-1;

    while(left <= rigth) {
        let mid = Math.floor((left+rigth)/2);

        if(nums[mid] === target) return mid
    
        //determine wich segement is sorted
        if(nums[left] <= nums[mid]) {
            if(nums[left] <= target && target <= nums[mid]) rigth=mid-1;
            else left=mid+1
        }else {
            if(nums[mid] <= target && target <= nums[rigth]) left=mid+1;
            else rigth=mid-1;
        }
    }

    return -1;
}


console.log(search([4,5,6,7,0,1,2], 8))

//https://www.youtube.com/watch?v=dgwIx9cXovM