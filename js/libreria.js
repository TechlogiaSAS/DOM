const lista = document.getElementById("lista");
const handlerCheckboxClick = (evento) => {
    // Obtiene el checkbox al que se le hizo click
    const checkbox = evento.target;
    //console.log(checkbox);
    //console.log(evento.target.checked);

    /*
    const padre = checkbox.parentElement;
    padre.style.textDecoration = "line-through";
    console.log(padre.children[1]);*/

    // Obtiene el <span> hermano
    const hermano = checkbox.nextElementSibling;

    // Agrega/Elimina clase css
    hermano.classList.toggle("terminado");

    // if (evento.target.checked) {
    //     hermano.classList.add("terminado");
    // } else {
    //     hermano.classList.remove("terminado");
    // }
}

const handlerSpanBorrarClick = (evento) => {
    // Obtener elemento al que se le hace click
    const spanBorrar = evento.target;
    //console.log(spanBorrar.parentElement);
    spanBorrar.parentElement.remove();
    refrescar(); 
}

const crearLi = (tarea) => {
    //console.log(tarea);

    // Crea eñ <li>
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    // Agregar listener al checkbox
    checkbox.addEventListener("click", handlerCheckboxClick);

    const spanTexto = document.createElement("span");
    spanTexto.textContent = tarea;
    const spanBorrar = document.createElement("span");
    spanBorrar.textContent = "x";
    spanBorrar.addEventListener("click", handlerSpanBorrarClick);

    // Agrega los elementos al li
    li.append(checkbox, spanTexto, spanBorrar);
    //console.log(li);
    // Retorna el li
    return li;
}

const refrescar = () => {
    const counter = document.getElementById("text-counter");
    //console.log(lista.childElementCount);
    counter.textContent = `Cantidad de tareas: ${lista.childElementCount}`;
}

export { crearLi, refrescar };