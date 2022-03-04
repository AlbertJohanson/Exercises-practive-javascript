const isPalindrome = (str) => {


    let str1 = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '').split("");

    let len = str1.length

    for(let i = 0; i < len; i++)
    {
        if(str1[i] !== str1[len - 1 - i])
        {
            console.log(false)
            return false;
        }
    }

    console.log(true)
    return true
}


isPalindrome('');