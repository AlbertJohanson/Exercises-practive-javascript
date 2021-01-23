'use strict'



function compareTriplets( ) {

    let a = [5, 6, 7]
    let b= [3, 6, 10]

    let score = [0, 0]


    for (let i = 0; i < a.length; i++) {
        a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : "" 
    }

    console.log(score)

}

compareTriplets()