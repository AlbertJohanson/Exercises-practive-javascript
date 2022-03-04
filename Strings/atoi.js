const myAtoi = (s) => 
{

    let result = 0;
    let sign = 1;
    let isNonWhiteSpaceMet = false;
    let isNumberPhase = false;


    for(let i = 0; i < s.length; i++)
    {
        const char = s[i]

        if(char === " ")
        {
            if(!isNonWhiteSpaceMet)
            {
                continue;
            } else 
            {
                break;
            }
        }
        isNonWhiteSpaceMet = true

        if(char >= '0' && char <= "9")
        {
            isNumberPhase = true
            result = result * 10 + (char - "0")
            continue
        }

        if(char === '+' && !isNumberPhase)
        {
            isNumberPhase = true
            continue
        }

        if(char === '-' && !isNumberPhase)
        {
            isNumberPhase = true
            sign *= -1;
            continue
        }
        break;
    }

    result *= sign;


    console.log(Math.min(Math.max(-(2 **31),  result), 2**31 - 1))
    return Math.min(Math.max(-(2 **31),  result), 2**31 - 1)
}


myAtoi("4193 with words");

