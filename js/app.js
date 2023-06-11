console.log("App");

// Obtiene elementos dado su id
const titulo = document.getElementById("titulo");
console.log(titulo);


// Obtiene elementos dado el tag
const lilist = document.getElementsByTagName("li");
console.log(lilist);

// Obtiene elementos dada una clase css
const msgList = document.getElementsByClassName("mensaje");
console.log(msgList);

//Obtiene varios elementos dado un selector
const hijos = document.querySelectorAll("ul li");
console.log(hijos);

//Obtiene un elemento dado un selector
const hijos1 = document.querySelector("ul li");
console.log(hijos1);

const imagen = document.querySelector("img");

if(imagen) {
    console.log("Imagen encontrada")
} else {
    console.log("No hay imagenes")
}

