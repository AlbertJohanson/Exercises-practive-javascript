'use strict'

const case1 = [ 128,  64,  32,  16,   8,   4,   2,   1]
const twoMinimunValues = data => {
    let min1 = data[0];
    let min2 = data[1];

    if(min1 > min2){
        const temp = min1;

        min1 = min2;
        min2 = temp;
    }


    for(let i = 2; i < data.length; i++){
        if(min1 > data[i]){
            min2 = min1
            min1 = data[i]
        }else if(min2 > data[i]){
            min2 = data[i]
        }
    }

    console.log([min1, min2]);
}

twoMinimunValues(case1);