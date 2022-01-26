/* const removeDuplicates = (nums) => {


    let indexCounter = 0;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] != nums[i - 1]) {
            nums[indexCounter] = nums[i];
            indexCounter++;
        }
    }

    return indexCounter;

}


console.log(removeDuplicates([1, 1, 2])) */

// a function that takes an array and return the same array whitout duplicates

function filterDuplicate(data)
{

    let filtered = [];

    for (let i = 0; i < data.length; i++) {
        if(filtered.indexOf(data[i]) == -1) {
            filtered.push(data[i]);
        }
    }

    return filtered;
}