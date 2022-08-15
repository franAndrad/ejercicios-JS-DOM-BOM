// Ejercicio mejorado del 9 con for, separa todas las vocales y las imprime
let frase = prompt ("Ingrese una frase");
frase = frase.toLocaleLowerCase();

for(let i=0 ; i < frase.length; i++ ){
    if(frase.charAt(i)==='a' ||frase.charAt(i)==='e' ||frase.charAt(i)==='i' ||frase.charAt(i)==='o' ||frase.charAt(i)==='u'){
        document.write(frase.charAt(i));
    }
}