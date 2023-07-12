const botonGuardar = document.getElementById("botonGuardar");
const botonObtener = document.getElementById("botonObtener");
const botonGuardarObjeto = document.getElementById("botonGuardarObjeto");
const botonObtenerObjeto = document.getElementById("botonObtenerObjeto");

botonGuardar.addEventListener("click", () => {
    localStorage.setItem("Fecha", new Date());
});

botonObtener.addEventListener("click", () =>{
    console.log(localStorage.getItem("Universidad", "Distrital"));
});

botonGuardarObjeto.addEventListener("click", () => {
    const movieObject = {
        title: "Star wars",
        year: 1977,
        genres: ["action", "sci-fi", "futuristic"]
    };
    // NO se puede guardar el objeto directamente
    //localStorage.setItem("movie", toString(movie));

    // Convierte el objeto en una cadena
    const cadena = JSON.stringify(movieObject);

    // Almacena la cadena de caracteres
    localStorage.setItem("movie", cadena);
});

botonObtenerObjeto.addEventListener("click", () => {
    // Obtiene el item de localStorage con el key requerido
    const cadenaMovie = localStorage.getItem("movie");
    console.log(cadenaMovie);

    const movieJson = JSON.parse(cadenaMovie);
    console.log(movieJson);
});




// Verificacion de soporte de LocalStorage en el browser
if (typeof Storage != "undefined") {
    console.log("%cLocalStorage Soportado", "color: green;");
} else {
    console.log("%cLocalStorage no soportado", "color: red;");
}

// Guarda un valor en el local Storage
// Parametros: key, value __ ambas son de tipo string


// try {
//     localStorage.setItem("Universidad", "Distrital");
// } catch (error) {
//     console.log("%cNo encontro la funcion", "color: red;");
// }