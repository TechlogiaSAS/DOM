const crearLi = (tarea) => {
    //console.log(tarea);

    // Crea eñ <li>
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const spanTexto = document.createElement("span");
    spanTexto.textContent = tarea;
    const spanBorrar = document.createElement("span");
    spanBorrar.textContent = "x";

    // Agrega los elementos al li
    li.append(checkbox, spanTexto, spanBorrar);
    //console.log(li);
    // Retorna el li
    return li;
}

export { crearLi };