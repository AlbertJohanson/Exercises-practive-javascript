

//BruteForce
//O(n  2)
/* const maxArea = function(height) {


    let max = 0;

    for(let i = 0; i < height.length; i++) {
        for(let j=i; j < height.length; j++) {
            max = Math.max(max, (j - i) * Math.min(height[i], height[j]))
        }
    }
    return max
}

console.log(maxArea([1,8,6,2,5,4,8,3,7])) */

//Two Pointers
//O(N)

const maxArea = function(height) {


    let max = 0

    let i = 0
    let j = height.length - 1
    
    while(i < j) {
        max = Math.max(max, (j - i) * Math.min(height[i], height[j]))
    
        //try to move the cursors
    
        if(height[i] < height[j]) {
           //move i to the next bigger border
           let k = i + 1
           while(height[k] <= height[i]) {
               k += 1
           }
            i = k
        } else {
            let k = j - 1
            while(height[k] <= height[j]) {
                k -= 1
            }
            
            j = k
        }
    }
    
    return max

}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))

//https://www.youtube.com/watch?v=ObUUdpIk3hM
