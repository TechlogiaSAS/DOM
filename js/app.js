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

img2.setAttribute("src", src1);
