<<<<<<< HEAD
const boton = document.getElementById("boton");
const indicador = document.getElementById("indicador");

const mouseClickHandler =  () => {
    console.log("Se hizo click");
};

const mouseOverHandler =  () => {
    console.log("Mouse sobre el boton");
};

const mouseOutHandler =  () => {
    console.log("Mouse sale del boton");
};

boton.addEventListener("click", mouseClickHandler);
boton.addEventListener("mouseover", mouseOverHandler);
boton.addEventListener("mouseout", mouseOutHandler);
=======
const section = document.querySelector("section");

// Crear un elemento DOM
const article = document.createElement("article");
article.textContent = "Nuevo articulo";

// Agrega el nuevo elemento a un elemento existente
section.appendChild(article);


const h2 = document.createElement("div");
h2.textContent = "Soy un h2"
const h3 = document.createElement("div");
h3.textContent = "Soy un h3"

// Agregar variops elementos
section.append(h2, h3);

const titulo1 = document.createElement("div");
titulo1.textContent = "Soy el titulo1"
const titulo2 = document.createElement("div");
titulo2.textContent = "Soy el titulo2"

// Arreglo de elementos
const titulos = [titulo1, titulo2];

//Desestructuracion de elementos de un arreglo
section.append(...titulos); 


// Eliminar elemento
const primerH2= document.querySelector("h2");
primerH2.remove();
>>>>>>> 27847f31dee181f0b33bc715733d953073766303
