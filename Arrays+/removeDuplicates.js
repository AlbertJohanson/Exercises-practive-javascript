const removeDuplicates = function(nums) {

    //El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
    return nums.splice(0, nums.length, ...(new Set(nums)));

};


removeDuplicates([[1,1,2]])