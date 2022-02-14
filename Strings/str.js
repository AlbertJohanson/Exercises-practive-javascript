const strStr = (haystack, needle) => {

    if(!needle) {
        return 0;
    }


    let i = 0;

    while(haystack.substring(i, i + needle.length) !== needle && i <= haystack.length) {
        i++;
    }


    return i > haystack.length ? -1 : i;



}