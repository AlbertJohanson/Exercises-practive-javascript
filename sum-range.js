'use strict'

const range = (start, end, step = start < end ? 1 : -1) => {

    const arr = [];

    if( step > 0 ) {
        for(let i = start; i <= end; i += step) arr.push(i)
    } else {
        for(let i = start; i >= end; i += step) arr.push(i);
    }

    return arr
}

const sum = (arr) => {
    let total = 0
    for(let value of arr) {
        total += value
    } 

    return total
}

console.log(range(1, 10))

console.log(range(5, 2, -1))

console.log(sum(range(1 , 10)))