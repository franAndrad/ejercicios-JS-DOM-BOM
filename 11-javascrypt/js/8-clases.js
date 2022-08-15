
// crear una clase
class Usuario{
    // creamos un metodo constructor
    // Es una mala practica poner propiedades que no se usen, estas son las generales
    constructor(nombreUsuario,nombre,apellido,correo,password,direccion){
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.direccion = direccion;
    }
    
    // definir los metodos
    cambiarPassword(){
        document.write('<br>Cambiando el password...');
    }
    
    // metodo para imprimir los datos
    mostrarDatos(){
        document.write(`<br>
        <ul>
            <li>Nombre: ${this.nombre} </li>
            <li>Apellido: ${this.apellido} </li>
            <li>Correo: ${this.correo} </li>
            <li>Direccion: ${this.direccion} </li>
            <li>Nombre usuario: ${this.nombreUsuario} </li>
        </ul>`);
    }
    
    // usamos propiedades conmutadas para acceder o cambiar una propiedad
    // get
    get mostrarNombreUsuario(){
        return this.nombreUsuario;
    }
    get mostrarDireccion(){
        return this.direccion;
    }
    // setter
    set modificarDireccion(nuevaDireccion){
        this.direccion = nuevaDireccion;
    }
    
}

// clase alumno que hereda de usuario
class Alumno extends Usuario{
    // creamos el constructor
    constructor(comision,legajo,estado,nombreUsuario,nombre,apellido,correo,password,direccion){
        // invocar el metodo constructor
        super(nombreUsuario,nombre,apellido,correo,password,direccion);
        // agregamos los nuevos
        this.comision = comision;
        this.legajo = legajo;
        this.estado = estado;
        this.asistencia = 0; //propiedad por defecto
        this.notas = []; //propiedad por defecto
    }
    
    // mostrar datos nuevos
    mostrarDatosAlumno(){
        document.write(`<br>
        <ul>
            <li>Comision: ${this.comision} </li>
            <li>Legajo: ${this.legajo} </li>
            <li>Estado: ${this.estado} </li>
            <li>Asistencia: ${this.asistencia} </li>
            <li>Notas: ${this.notas} </li>
        </ul>`);
    }
    
    // mostrar sobrescribiendo un metodo
    mostrarDatos(){
        document.write(`<br>
        <ul>
            <li>Nombre: ${this.nombre} </li>
            <li>Apellido: ${this.apellido} </li>
            <li>Correo: ${this.correo} </li>
            <li>Direccion: ${this.direccion} </li>
            <li>Nombre usuario: ${this.nombreUsuario} </li>
            <li>Comision: ${this.comision} </li>
            <li>Legajo: ${this.legajo} </li>
            <li>Estado: ${this.estado} </li>
            <li>Asistencia: ${this.asistencia} </li>
            <li>Notas: ${this.notas} </li>
        </ul>`);
    }
    
    // get y set
    
    // dos formas de hablitiar o deshabilitar
    set modificarEstado(nuevoEstado){
        this.estado = nuevoEstado;
    }
    deshabilitar(){
        this.estado = false;
    }
    habilitar(){
        this.estado = true;
    }
    
    // get
    get mostrarEstado(){
        return this.estado;
    }
}




// Como crear un objeto o instancia
let userValentina = new Usuario('ValeOrmaechea','Valentina', 'Ormaechea', 'valeOrmaechea@gmail.com','123456a','-');
let userFrancisco = new Usuario('franAndrad','Francisco', 'Andrade', 'franAndrad@gmail.com','123456a','-');

console.log(userValentina);
userValentina.mostrarDatos();
userFrancisco.mostrarDatos();

document.write(`<br>El nombre del usuario es ${userValentina.mostrarNombreUsuario}`);
document.write(`<br>La direccion del usuario es ${userValentina.mostrarDireccion}`);

userFrancisco.modificarDireccion = 'Perico';
document.write(`<br>La direccion del usuario es ${userFrancisco.mostrarDireccion}`);

let alumnoMauro = new Alumno('2i',1231,true,'mGarcia','Mauro', 'Garcia','mauro@gmail.com','t1313','Tucuman');
alumnoMauro.mostrarDatos();
alumnoMauro.mostrarDatosAlumno();

// alumnoMauro.deshabilitar();
alumnoMauro.modificarEstado(false);
alumnoMauro.mostrarDatosAlumno();

// para usar el set ponemos
// clase.nombreSet = valor;
