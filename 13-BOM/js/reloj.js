

window.setInterval(()=>{
    let fecha = new Date();
    // console.log(fecha);

    // console.log(fecha.getDate()); //Devuelve el dia de   la semana 1-31
    // console.log(fecha.getDay()); //Devuelve el numero    de los dias 0-6
    // console.log(fecha.getMonth()); //Devuelve el     numero en meses del año 0-12
    // console.log(fecha.getFullYear()); //Devuelve el año

    let semanas = ['Domingo','Lunes','Martes',  'Miercoles', 'Jueves','Viernes','Sabado'];
    let meses = ['Enero','Febrero','Marzo','Abril','Mayo',  'Junio','Julio','Agosto','Septiembre','Octubre',  'Noviembre','Diciembre'];

    let fechaReloj = document.getElementById('fecha');
    fechaReloj.innerHTML = `
    <p>${semanas[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}   <\p>
    `;

    //Arreglar los valores de un digito
    let horas = fecha.getHours();
    if(horas<10){
        horas = '0' + horas;
    }
    let minutos = fecha.getMinutes();
    if(minutos<10){
        minutos = '0' + minutos;
    }
    let segundos = fecha.getSeconds();
    if(segundos<10){
        minutos = '0' + segundos;
    }
    
    let horaReloj = document.getElementById('hora');
    horaReloj.innerHTML = `
    <p>${horas}:${minutos}:${segundos}</p>`;
},1000);

function cambiarColor(color){
    let seccion = document.getElementsByClassName('fechaHora');
    // console.log(seccion[0]);
    seccion[0].className = `fechaHora ${color} py-4`;
}