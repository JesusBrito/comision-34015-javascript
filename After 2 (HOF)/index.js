//================ FIND EN ARREGLO DE OBJETOS ================

// let arrayProductos = [
//   { nombre: "Laptop", precio: 1000, cantidad: 3 },
//   { nombre: "PC", precio: 800, cantidad: 2 },
//   { nombre: "iPhone", precio: 1200, cantidad: 5 },
// ];

// let elementoEncontrado = arrayProductos.find(
//   (elemento) => elemento.nombre === "Laptop"
// );

// console.log(elementoEncontrado);

//================ OBTENER VALORES DE LA FECHA ================

// const hoy = new Date()

// console.log(hoy.getFullYear())
// console.log(hoy.getMonth())
// console.log(hoy.getDay())

//================ EJEMPLO DATE DIFERENCIAS FECHAS ================

const fechaActual = new Date();
const milisegundosPorDia = 86400000;

let dia = parseInt(prompt("Ingresa tu día de nacimiento"));
let mes = parseInt(prompt("Ingresa tu mes de nacimiento"));
let anio = parseInt(prompt("Ingresa tu año de nacimiento"));

const cumpleanios = new Date(anio, mes - 1, dia);
const diferenciaDias = (fechaActual - cumpleanios) / milisegundosPorDia;
const diferenciaAnios = diferenciaDias / 365;

alert(`Naciste hace ${diferenciaAnios} años`);
alert(`Naciste hace ${Math.floor(diferenciaAnios)} años`);
alert(`Naciste hace ${Math.ceil(diferenciaAnios)} años`);