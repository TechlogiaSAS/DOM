console.log("app");

// Destructuring

const usuario = {
    nombre: "Catalina",
    edad: "21",
};

// Accede a propiedades con destructuring
//const { nombre, edad } = usuario;

//Acede a propiedades con destructuring renombrando variables
const { nombre: name, edad: age} = usuario;

console.log(usuario);


//Objeto
const weather = {
    today: {min: 9, max:20},
    tomorrow: {min: 5, max:10}
}

const { tomorrow: {max} } = weather;

const { tomorrow: {max: maxTomorrow} } = weather;

//console.log(max);

const user = {
    nombre: "Sir",
    apellido: "Cannabis",
    ciudad: "Bogota",
    pais: "Colombia",
};


function imprimirUbicacionV1 (usuario) {
    console.log(usuario.ciudad, usuario.pais);
}

function imprimirUbicacionV2 ({ciudad, pais}) {
    console.log(ciudad, pais);
}

imprimirUbicacionV1(user);
imprimirUbicacionV2(user);


// SWAPING

let a = 4;
let b = 7;

[a, b] = [b, a];
console.log(a, b);

