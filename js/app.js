//Obtiene el elemento
const titulo = document.getElementById("titulo");
const link = document.getElementById("link");

//Modifica el texto del elemento
titulo.textContent = "Frontend Avanzado";

link.href = "https://www.discogs.com/es/release/12790214-Mala-Fama-Ritmo-Sustancia"

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

//Obtiene el valor de un atributo
const src1 = img1.getAttribute("src");
console.log(src1);

//Modifica el atributo de un elemento
img2.setAttribute("src", src1);

//Obtiene la lista
const lista = document.getElementById("lista");
console.log(lista);

//Cambiar el estilo
lista.style.color = "orange";
//Camelcase
lista.style.backgroundColor = "purple";

//Obtiene el boton
const boton = document.getElementById("boton");
//Agrega la clase CSS al elemento
boton.classList.add("btn");
boton.classList.add("border");

//Elimina una clase CSS del elemento
boton.classList.remove("btn")
