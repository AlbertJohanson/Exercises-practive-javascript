const isAnagram = (s, t) => {


    if(s.length !== t.length) return false;


    let sMap = s.split('');
    let tMap = t.split('');

    sMap.sort();
    tMap.sort();

    for(let i = 0; i < sMap.length ; i++)
    {
        if(sMap[i] !== tMap[i])
        {
            console.log(false);
            return false;
        };
    }

    console.log(true)
    return true;
}




isAnagram('anagram', 'nagaram') // true