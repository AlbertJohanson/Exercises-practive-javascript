

var findMedianTwoSortedArrays = function(nums1, nums2) {


    let concat = nums1.concat(nums2);

    concat = concat.sort((a, b) => a - b);

    console.log(concat);

    let length = concat.length;

    if(length % 2 == 1) 
    {
        //lenth is odd

        console.log(concat[(length / 2)-.5]);
        return concat[(length / 2)-.5];
    } else 
    {
        console.log((concat[length / 2] + concat[(length / 2) - 1]) / 2);
        return (concat[length / 2] + concat[(length / 2) - 1]) / 2;
    }

}


nums1 = [1, 4, 7, 9];
nums2 = [2, 3, 5, 6, 8];

findMedianTwoSortedArrays(nums1, nums2);