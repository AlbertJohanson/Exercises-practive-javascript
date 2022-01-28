const reverseInteger = (x) => {
    // let revNum = 0;
    // let lastDigit = 0;

    // while(x !== 0) 
    // {
    //     lastDigit = x % 10;    
    //     x = parseInt(x / 10);
    //     revNum = revNum * 10 + lastDigit;
    //     if(revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31)) ;
    // }
    
    // console.log(revNum > Math.pow(2, 31) ? 0 : revNum);
    // return revNum > Math.pow(2, 31) ? 0 : revNum;

    const reversedNumber = parseInt(x.toString().split('').reverse().join(''));

    //Check for invalid output
    if(reversedNumber > 2147483647) 
    {
        return 0;
    }


    return x < 0 ? -Math.abs(reversedNumber) : reversedNumber;
}


reverseInteger(1534236469);





