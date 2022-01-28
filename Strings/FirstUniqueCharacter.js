const firstUniqueCharacter = (s) => 
{
    let map = s.split('');


    for(let i = 0; i < map.length; i++)
    {
        
        const char = map[i];

        if(s.indexOf(char) === s.lastIndexOf(char))
        {
            console.log(i);
            return i;
        }

    }

    console.log(-1);
    return -1;
}


firstUniqueCharacter("leetcode");