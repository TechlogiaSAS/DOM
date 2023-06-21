console.log("app");

const area = document.getElementById("area");

//Obtiene todos los hijos del elemento
const hijos = area.children;
console.log(hijos);

// Recorre la lista de hijos
for (const hijo of hijos) {
    console.log(hijo);
}
console.log(`La cantidad de hijos del div es ${hijos.length}`);

// Obtiene el primer hijo
const primerHijo = area.firstElementChild;
console.log(primerHijo);

// Obtiene el ultimo hijo
const ultimoHijo = area.lastElementChild;
console.log(ultimoHijo);

// Obtiene un hijo dada la posicion
const algunHijo = hijos[1];
console.log(algunHijo);
console.log(area.children[2]);

// Obtiene la referencia de los elementos
const titulo = document.getElementById("titulo");
const parrafo = document.getElementById("parrafo");

console.log(titulo);
console.log(parrafo);

// Obtiene el padre de un elemento
const padre = titulo.parentElement;
console.log(padre);

// Obtiene el ultimo hijo del padre
console.log(padre.lastElementChild);

// Encadenar invocacion de propiedades
console.log(parrafo.parentElement.lastElementChild);


const articulo = document.querySelector("article");
console.log(articulo);

const abuelo = articulo.parentElement.parentElement;
console.log(abuelo);
