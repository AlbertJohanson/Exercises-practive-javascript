function saludar(name) {
    const saludo = "Hola como estas"

    return console.log(`${saludo} mi nombre es ${name}`)
}


saludar('Albert')

//Output: Hola como estas mi nombre es Albert



const square = function (number) {
    return number * number
}


const x = square(4)

console.log(x)


const saludar = function(name) {
    const saludo = "Hola como estas"

    return console.log(`${saludo} mi nombre es ${name}`)
} 


const albertSaluda = saludar('Albert')



const saludar = (name) => (console.log(`Hola como estas mi nombre es ${name}`))