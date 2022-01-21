

const spiralOrder = function(matrix) {
    
    const directsion = [
        [0,1],
        [1,0],
        [0, -1],
        [-1, 0],
    ]


    let currentDirectionIndex = 0

    const turnRigth = () => {
        currentDirectionIndex = (currentDirectionIndex + 1) % directsion.length
    }

    const results = []

    let i = 0
    let j = 0
    const total = matrix.length * matrix[0].length
    while (results.length < total) {
        
    }

};

//https://www.youtube.com/watch?v=95zEFgS4WSo