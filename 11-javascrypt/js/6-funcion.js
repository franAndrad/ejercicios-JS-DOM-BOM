//Ecma Script 5 ES5

// Funciones sin parametro
function saludar(){
    // todo el codigo que quiero que tenga esta funcion
    document.write("Hola mundo");
}

// Funcion con parametros
function saludarPersona(nombreRecibido,apellidoRecibido){
    document.write(`<br>Hola mi nombre es: ${nombreRecibido} y mi apellido es: ${apellidoRecibido}`);
}

// Funcion que retorna valor
// function converDolarPesos(dolar){
//     let pesosFinales = dolar * 210;
//     return pesosFinales;
// }


//Ecma Script 6 ES6 arrow fuctions

// Funcion que retorna valor
// El problema de declarar la funcion asi es que si o si tiene que estar arriba del codigo
const converDolarPesos = (dolar) => {
    return dolar * 210;
}

// invocar o llamar una funcion
// saludar();
// let nombre = prompt('Ingrese un nombre');
// let apellido = prompt('Ingrese un apellido');
// saludarPersona(nombre,apellido);
document.write(converDolarPesos(60));


