'use strict'

function diagonalDifference() {

    // length of input matrix.
    const matrix = [[11,2,4],[4,5,6],[10,8,-12]]

    const length = matrix.length

    let diagonal1 = 0, diagonal2 = 0


    // Looping through the array and summing the diagonals.
    for( let i = 0; i < length; i++) {

        // Calculating the primary diagonal.
        diagonal1 += matrix[i][i];
         // Reversing the second dimension of array to calculate secondary diagonal.
         diagonal2 += matrix[length -1 -i][i]
    }

    console.log(Math.abs(diagonal1 - diagonal2))
}

diagonalDifference()