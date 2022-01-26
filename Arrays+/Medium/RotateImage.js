
//Iteration
//Time: n * n
//space O(1)
const rotate = function(matrix) {
    

    // let depth = 0
    // const maxDepth = Math.floor(matrix.length / 2)


    // while(depth < maxDepth){
    //     const length = matrix.length - depth * 2
    //     const left = depth
    //     const top = depth

    //     for (let i = 0; i < length - 1; i++) {
    //         let first = matrix[top][left + i]
    //         let next = matrix[top + i][left + length - 1]

    //         matrix[top + i][left + length - 1] = first
            
    //         first = next
    //         next = matrix[top + length - 1][left + length - 1 - i] 

    //         matrix[top + length - 1][left + length - 1 - i] = first

    //         first=next
    //         next = matrix[top + length - 1 - i][left]

    //         matrix[top + length - 1 - i][left] = first

    //         matrix[top][left + i] = next
    //     }
    //     depth += 1
    // }


    for(let i = 0; i < matrix.length; i++)
    {
        for(let c = i; c < matrix[0].length; c++)
        {
            [matrix[i][c], matrix[c][i]] = [matrix[c][i], matrix[i][c]];
        }
    }

    for(let row of matrix )
    {
        row.reverse();
    }
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))

//https://www.youtube.com/watch?v=-famaCHwEyI