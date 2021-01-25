


const candles = [4,3,2,1,3]

function birthdayCakeCandles() {

    /* const candles = [3,2,1,3] */
    const candles2 = [82, 49, 82, 82, 41, 82, 15, 63, 38, 25]

    candles2.sort(function(a,b) {
        return b-a
    });

    var count = 1;

    for (var i = 1; i< candles2.length; i++) {
        if(candles2[0]==candles2[i]){
            count++
        }
    }

    console.log(count)
}

birthdayCakeCandles()