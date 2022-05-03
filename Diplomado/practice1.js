let kelvin
let fahrenheit
let celsius


kelvin = "293"
fahrenheit = Math.floor(kelvin - 273.15) * 1.8 + 32
celsius = Math.floor(kelvin - 273.15)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
console.log(`The temperature is ${celsius} degrees Celsius.`)