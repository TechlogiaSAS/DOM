function alerta() {
    alert("Hello");
}


//Obtiene el elemento HTML
const tituloJavascript = document.getElementById("tituloJavascript");

function mostrarFecha(){
    const fechaActual = new Date();
    console.log(fechaActual);
}


//Asocia un evento a un elemento
//NO  SE ESCRIBEN LOS PARENTESIS DE LA FUNCION
tituloJavascript.onclick = mostrarFecha;

//Obtiene una referencia al elemento
const tituloFecha = document.getElementById("tituloFecha");

//El elemento nescucha el evento click
tituloFecha.addEventListener("click", mostrarFecha);
tituloFecha.addEventListener("click", function(){
    console.log("Hello 1");
});
tituloFecha.addEventListener("click", function(){
    //Obtiene la fecha actual
    const fecha = new Date();
    //Obtiene el dia actual
    const day = fecha.getDate();
    //Muestra el dia actual
    console.log(day)

    //Verifica si el dia actual esta en la primera quincena o en la segunda quincena
    if( day >= 1 && day <=15) {
        tituloFecha.classList.add("primera-quincena");
    } else {
        tituloFecha.classList.add("segunda-quincena");
    }
});