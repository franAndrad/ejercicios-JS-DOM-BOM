export function campoRequerido(input){
    console.log('desde la funcion blur');
    if(input.value.trim().length > 0){ //.trim() quita los espacios por delante y detras
        console.log("El dato esta correcto");
        input.className = "form-control is-valid";
        return true;
    } else{
        console.log("Error");
        input.className += " is-invalid";
        return false;
    }
}

export function cantidadCaracteres(min,max,input){
    if(input.value.trim().length>=min && input.value.trim().length<=max){
        input.className = 'form-control is-valid';
        return true;
    } else {
        input.className += ' is-invalid';  
        return false;
    }
}

// francisco@gmail.com xxxxxxxxxx@xxxx.xxx
export function validarNumeros(input){
    // validar con expresiones regulares
    let patron = /^[0-9]{1,3}$/;  //{}cantidad de digitos []numeros validos
    if(patron.test(input.value.trim())){
        input.className = 'form-control is-valid';
        return true;
    } else {
        input.className += ' is-invalid';
        return false;
    }
}

export function validarDNI(input){
    let patron = /^[\d]{1,2}[\d]{3,3}[\d]{3,3}$/;  //[/d] es lo mismo que de [0-9]
    if(patron.test(input.value.trim())){
        input.className = 'form-control is-valid';
        return true;
    } else {
        input.className += ' is-invalid';
        return false;
    }
}

export function validarPeso(input){
    let patron = /^[\d]{1,3}(\,[\d]{1,2})?$/;  //[/d] es lo mismo que de [0-9]
    if(patron.test(input.value.trim())){
        input.className = 'form-control is-valid';
        return true;
    } else {
        input.className += ' is-invalid';
        return false;
    }
}
export function validarAltura(input){
    let patron = /^[1-2]{1}(\,[\d]{1,2})?$/;  //[/d] es lo mismo que de [0-9]
    if(patron.test(input.value.trim())){
        input.className = 'form-control is-valid';
        return true;
    } else {
        input.className += ' is-invalid';
        return false;
    }
}

export function validarAnio(input){
    let anioActual = new Date().getFullYear();
    if(input.value >= 1930 && input.value <= anioActual){
        input.className = 'form-control is-valid';
        return true;
    } else {
        input.className += ' is-invalid';
        return false;
    }
}