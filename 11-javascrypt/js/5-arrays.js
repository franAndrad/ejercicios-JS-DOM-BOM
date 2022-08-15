// Declarar un arreglo
let _usuarios = [];
let series = ['Naruto',2,'GOT',8,'Rick and Morty',4];

// Funciones
const imprimirArreglo = (titulo) => { 
    document.write('<hr>');
    document.write(`<h3>${titulo}</h3>`);
    for (let i = 0; i < series.length; i++) {
        document.write('<br>' + series[i]);
    }
};

document.write(series);
// Como acceder a un arreglo
document.write('<br>' + series[0]);
document.write('<br>' + series[4]);

// Bucles para mostrar todos los elementos del arreglo
imprimirArreglo("Arreglo original");

// Agregar un elemento al final del arreglo
series.push('Ozark');
imprimirArreglo("Se agrego un elemento al final del arreglo");

// Agragar un elemento en una posicion particuar
series.splice(3,0,'Breaking Bad');
imprimirArreglo("Se agrego un elemento en una posicion");

// Elimar un elemento desde uns posicion particular
// document.write('<hr>');
// series.splice(5,2); //Elimina desde la posicion 5 dos elementos
// for (let i = 0; i < series.length; i++) {
//     document.write('<br>' + series[i]);
// }

// Elimar todos los elementos desde una posicion particular
series.splice(7);
imprimirArreglo("Elimar todos los elementos desde una posicion particular (7)");

// Modificar el elemento de un arreglo
series[6] = true;
imprimirArreglo("Modificar el elemento 7 de un arreglo");