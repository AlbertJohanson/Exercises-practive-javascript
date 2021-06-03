function iniciar() {
    var nombre = "Albert" //Declaramos dentro de la funcion iniciar() la variable nombre

    function mostrarNombre() { //Dentro de la funcion iniciar() tambien declaramos la funcion interna mostrarNombre()
        console.log( "Hola mi nombre es " + nombre) //Esto es un closure ya que mostrarNombre() puede acceder a la variable del a funcion exterior 
    }
    return  mostrarNombre() //Aqui retornamos la funcion mostrarNombre()
}

iniciar() //iniciamos la funcion


function RazaDePerro(raza) { //Declaramos la funcion exterior RazaDePerro()

    const MensajeRaza = `La raza del perro es ${raza}` //Declaramos la variable que contendra el mensaje

    return function() { //Aqui retornaremos inmediatamente la funcion que es anonima y imprimira el mensaje
        console.log(MensajeRaza)//Aqui podemos ver otra vez que puede acceder a la funcion que se encuentre en la funcion exterior
    }

}

const Pitbull =  RazaDePerro('Pitbull');

Pitbull() //Print: La raza del perro es Pitbull