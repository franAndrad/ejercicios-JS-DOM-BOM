//Ejercicio 10 realizado en clases
let fila = parseInt(prompt('Ingrese la cantidad de filas'));
let columna = parseInt(prompt('Ingrese la cantidad de columnas'));
let resultado = fila * columna;
console.log(resultado);

document.write(`<table><tbody>`);
for (let i = 0; i < fila; i++) {
    document.write(`<tr>`);
    for (let j = 0; j < columna; j++) {
        document.write(`<td> ${resultado--} </td>`);
    }    
    document.write(`</tr>`);
}
document.write(`</table></tbody>`);

// Ejemplo de como seria la estructura
// document.write(`<table class="">
// <tbody>
//     <tr>
//         <td>1</td>
//         <td>2</td>
//         <td>3</td>
//     </tr>
// </tbody>
// </table>`);

