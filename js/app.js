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
