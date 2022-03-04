const longestCommonPrefix = (strs) => {    


    let prefix = strs[0];

    for(let i = 0; i < prefix.length; i ++) 
    {

        for(let j = 1; j < strs.length; j++) {
            if(strs[j][i] !== prefix[i]) {
                prefix = prefix.substring(0, i);
                break;
            }
        }

    }

    console.log(prefix);
    return prefix;
}



longestCommonPrefix(["flower","flow","flight"]);