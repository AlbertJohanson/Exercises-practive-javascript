
const contaisDuplicate = function(nums) {

    let numbers = new Set();

    for (let num of nums) {
        if(!numbers.has(num)) {
            numbers.add(num);
        } else {
            return true;
        }
    }

    return false;

}

console.log(contaisDuplicate([1,2,3,1]))

//https://www.youtube.com/watch?v=umqL2CyEywM