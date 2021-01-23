'use strict'



function aVeryBigSum() {

    const ar = [5, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

    console.log (ar.reduce((a, b) => a + b, 0))
}

aVeryBigSum()