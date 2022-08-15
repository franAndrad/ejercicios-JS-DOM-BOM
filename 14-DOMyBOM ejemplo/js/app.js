import { campoRequerido, cantidadCaracteres, validarAltura, validarAnio, validarDNI, validarNumeros, validarPeso } from "./validaciones.js";

let nombre = document.getElementById('nombre');
let edad = document.getElementById('edad');
let DNI = document.getElementById('dni');
let genero = document.getElementById('genero');
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let anio = document.getElementById('fechaNacimiento');
let formulario = document.getElementById('formGeneraciones');

nombre.addEventListener('blur',()=>{cantidadCaracteres(2,40,nombre)});
edad.addEventListener('blur',()=>{validarNumeros(edad)});
DNI.addEventListener('blur',()=>{validarDNI(DNI)});
genero.addEventListener('change',()=>{campoRequerido(genero)});
peso.addEventListener('blur',()=>{validarPeso(peso)});
altura.addEventListener('blur',()=>{validarAltura(altura)});
anio.addEventListener('blur',()=>{validarAnio(anio)});
anio.addEventListener('keyup',()=>{validarAnio(anio)}); //Dejo dos eventos y con el keyup es exhaustivo
formulario.addEventListener('submit',crearPersona)

function crearPersona(e){ //Agregamos la e que es el evento event para que se quede ahi
    e.preventDefault();
    // console.log(e);
    if(cantidadCaracteres(2,40,nombre) && validarNumeros(edad) && validarDNI(DNI) && campoRequerido(genero) && validarPeso(peso) && validarAltura(altura) && validarAnio(anio)){
        console.log('tengo que crear la persona');
    } else {
        console.log('mostrar mensaje de error');
    }
}