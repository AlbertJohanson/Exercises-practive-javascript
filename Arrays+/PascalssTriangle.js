
const generate = function(numRows) {
    let triangle = [[1]]


    for (let i = 0; i < numRows - 1; i++) {
        triangle.push(generateNextLevel(triangle))
        
    }

    return triangle

    function generateNextLevel(triangle) {

        const depth = triangle.length

        const prevLevel = triangle[triangle.length - 1]

        const nextLevel = []

        for (let i = -1; i < depth; i++) {

            const parent1 = prevLevel[i] ?? 0
            const parent2 = prevLevel[i + 1] ?? 0

            nextLevel.push(parent1 + parent2)

        }

        return nextLevel

    }

}

console.log(generate(5))