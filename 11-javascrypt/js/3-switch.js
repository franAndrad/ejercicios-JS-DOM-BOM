let estacion = prompt("Ingrese su estacion preferida: 1: Verano, 2: Otoño, 4: Invierno, 4:Primavera");

estacion = estacion.toUpperCase(); //Convierte todo a mayuscula
console.log(estacion);

switch(estacion){
    case '1':
    case 'VERANO':
        document.write("Sandwichito de miga");
        break;
    case '2':
        document.write("Locro");
        break;
    case '3':
        document.write("Guiso de fideo moñito");
        break;
    case '4':
        document.write("Cerveza");
        break;
    default :
        document.write("Ingrese un valor valido");
        break;    
}