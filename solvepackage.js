function solve(width, height, length, mass) {
    
    let bulky = false;
    let heavy = false;
    let stack = "";

    let volume = width * height * length;


    if(volume >= 1000000)
    {
        bulky = true;
    } else 
    {
        return bulky;
    }


    if(mass >= 20)
    {
        heavy = true;
    } else 
    {
        return heavy;
    }


    if(bulky == true && heavy == true)
    {
        sta
    }


    return stack;

    
}


console.log(solve(160, 70, 70, 10));

