// let memoria = '16RAM';
// let pantalal = 7;
// let almacenamiento = '128GB';
// let camara = true;
// let SO = 'Android';

// Notacion literal para crear un objeto
let usuarioFrancisco = {
    // propiedad: valor,
    nombreUsuario: 'fran',
    password: 'A$43242sdf',
    nombre: 'Francisco',
    apellido: 'Andrade',
    correo: 'fran@gmail.com',
    estado: true,
    // metodos o funciones
    cambiarPassword: () =>{
        document.write('nuevo password');
    }
}

// mostrar un objeto
document.write(usuarioFrancisco);
console.log(usuarioFrancisco);

// mostrar propiedades de un objeto (forma1)
document.write(`<br>Nombre de usuario: ${usuarioFrancisco.nombre}`);
// mostrar propiedades de un objeto (forma2)
document.write(`<br>Correo: ${usuarioFrancisco['correo']}`);

// modificar un propiedad de un objeto
usuarioFrancisco.estado = false;
document.write(`<br>Estado: ${usuarioFrancisco.estado}`);

// agregamos una propiedad nueva al objeto
usuarioFrancisco.direccion = 'Cordoba';
document.write(`<br>Direccion: ${usuarioFrancisco.direccion}`);

// invocar un metodo
usuarioFrancisco.cambiarPassword();

// crear un bucle que muestre todo el objeto
let claves = Object.keys(usuarioFrancisco); //devuelve un arreglo con las propiedades del objeto
console.log(claves);

for (let i = 0; i < claves.length; i++) {
    document.write(`<br> ${claves[i]}: ${usuarioFrancisco[claves[i]]}`);
    
}
