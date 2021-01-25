

function FizzBuzz() {
    for(let number = 1; number <= 100; number++){
        let output = ""

        if(number % 3 == 0){

            output += "Fizz"

        }else if(number % 5 == 0 ){

            output += "buzz"

        }else if (number % 3 || number % 5){

            output += "fizzbuzz"
            
        }

        console.log(output || number)
    }
}

FizzBuzz()