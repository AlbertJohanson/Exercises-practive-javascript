const flatArray = (array) => {
    let flateedArray = [];

    for(let i = 0; i < array.length; i++)
    {
        const current = array[i];
        if(Array.isArray(current))
        {
            flatArray(current);
        } else 
        {
            flateedArray.push(current);
        }
    }


    console.log(flateedArray);
} 


flatArray([1, 2, [3, [4, 5, 6],7, 8], 9, 10]);