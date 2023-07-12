import { crearLi, refrescar } from "./libreria.js";

document.addEventListener("DOMContentLoaded", () => {

    console.log("Cargo el DOM");
})

// const botonAgregar = document.getElementById("botonAgregar");
const inputTarea = document.getElementById("inputTarea");
const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista");

const agregarTarea = (evento) => {
    // Evita enviar la informaciona al servidor
    evento.preventDefault();

    //console.log("Agregar Tarea");
    //console.log(inputTarea);

    // Obtiene el texto digitado por el usuario

    const tarea = inputTarea.value;

    // Verificacion si la entrada esta vacia
    if ( tarea == "") {
        inputTarea.classList.add("error");
        return;
    }

    const li = crearLi(tarea);

    lista.append(li);
    //console.log(tarea);

    // Limpia el input de la tarea
    inputTarea.value = "";
    inputTarea.classList.remove("error");
    refrescar();
};

//Agrega el listener cuando se intente enviar informacion desde el formulario

formulario.addEventListener("submit", agregarTarea);