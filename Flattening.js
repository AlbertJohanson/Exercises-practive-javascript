'use strict'


function flattening()  {

    let arr = [[1, 2, 3], [4, 5], [6]];

    console.log(arr.reduce((flat, current) => flat.concat(current),[]))
}

flattening()