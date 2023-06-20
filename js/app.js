const boton = document.getElementById("boton");
const indicador = document.getElementById("indicador");

const mouseClickHandler =  () => {
    console.log("Se hizo click");
    indicador.classList.add("click");
    indicador.classList.remove("over");
    indicador.classList.remove("out");

};

const mouseOverHandler =  () => {
    console.log("Mouse sobre el boton");
    indicador.classList.add("over");
    indicador.classList.remove("click");
    indicador.classList.remove("out");
};

const mouseOutHandler =  () => {
    console.log("Mouse sale del boton");
    indicador.classList.add("out");
    indicador.classList.remove("over");
    indicador.classList.remove("click");
};

boton.addEventListener("click", mouseClickHandler);
boton.addEventListener("mouseover", mouseOverHandler);
boton.addEventListener("mouseout", mouseOutHandler);


const linkMenu = document.getElementById("linkMenu");
const menu = document.getElementById("menu");

linkMenu.addEventListener("mouseover", () => {
    menu.style.display = "block";
});
linkMenu.addEventListener("mouseout", () => {
    menu.style.display = "none";
});

