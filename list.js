'use strict'


const arrayToList = (arr) => {

    let list = null

    for(let i = arr.length - 1; i >= 0; i--){
        list = {value: arr[i], rest: list}
    }

    return list
}


const listToArray = (list) => {

    let arr = [];

    for(let node = list; node; node = node.rest){
        arr.push(node.value)
    }

    return arr
}


const prepend = (value, list) => {
    return {value, rest: list}
}

const nth = (list, n) => {
    if(!list) return undefined;

    else if (n == 0) return list.value;

    else return nth(list.rest,  n - 1);

}

console.log(arrayToList([10, 20]));

console.log(listToArray(arrayToList([10, 20, 30])));

console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([10, 20, 30]), 1));

