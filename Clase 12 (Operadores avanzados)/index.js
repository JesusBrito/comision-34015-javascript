//================ OPERADOR ++ ================

//let num = 10;
//num = num + 1;
//num += 1;

//num++;

//console.log("El numero es: " + num);

//================ OPERADOR TERNARIO ================

// Utilizando un if else tradicional

// let permiso;
// let edad = parseInt(prompt("Ingresa tu edad"));

// if (edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if (permiso) {
//   alert("Puede comprar cerveza");
// } else {
//   alert("No puede comprar");
// }

// Utilizando un operador ternario

// let edad = parseInt(prompt("Ingresa tu edad"));
// const permiso = edad >= 18 ? true : false;

// permiso ? alert("Puede comprar cerveza") : alert("No puede comprar");

//================ OPERADOR AND ================

//const carrito = [];

// Utilizando un if tradicional

// if (carrito.length === 0) {
//   console.log("El carrito está vacío!")
// }

// Utilizando operador AND
//carrito.length === 0 && alert("El carrito está vacío!");

//================ OPERADOR OR ================

// const usuario = {
//   nombre: "John Doe",
//   edad: 14,
// };
// const usuarioDos = null;

// console.log(usuario || "El usuario uno no existe");

// console.log(usuarioDos || "El usuario dos no existe");

// EJEMPLO DOS

// let carrito;
// let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));

// if (carritoLocalStorage) {
//   carrito = carritoLocalStorage;
// } else {
//   carrito = [];
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// console.log(JSON.parse(localStorage.getItem("carrito")));
// console.log(carrito);

//================ OPERADOR NULLISH ================
//================  ================

//const usuario = null
//console.log(usuario.cursos || "La propiedad no existe");

// const usuario = {
//   nombre: "John Doe",
//   edad: 22,
//   cursos: {
//     javascript: "aprobado",
//   },
// };

// console.log(usuario?.cursos?.javascript || "La propiedad no existe");
// console.log(usuario?.trabajos?.coderhouse || "La propiedad no existe");

//================ DESESTRUCTURACIÓN ================

// const usuario = {
//   nombre: "John Doe",
//   edad: 32,
//   telefono: {
//     cel: 113334444,
//     casa: 5544221345,
//     trabajo: 113325555,
//   },
// };

// // let nombre = usuario.nombre;
// // let edad = usuario.edad;

// const {
//   nombre,
//   edad,
//   direccion,
//   telefono: { trabajo, casa: telefonoCasa },
// } = usuario;

// console.log("Nombre: " + nombre);
// console.log("Edad: " + edad);
// console.log("Dirección: " + direccion);
// console.log("Teléfono trabajo: " + trabajo);
// console.log("Teléfono casa: " + telefonoCasa);

//================ DESESTRUCTURACIÓN EN PARÁMETROS ================

// const usuario = {
//   id: 1,
//   nombre: "John Doe",
//   edad: 32,
//   telefono: {
//     cel: 113334444,
//     casa: 5544221345,
//     trabajo: 113325555,
//   },
// };

// const imprimirIdNombre = ({ id, nombre }) => {
//   console.log("ID: " + id);
//   console.log("Nombre: " + nombre);
// };

// imprimirIdNombre(usuario);

//================ DESESTRUCTURACIÓN DE ARRAYS ================

// const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];

// // omito las dos primeras posiciones
// const [uno, dos] = nombres;

// console.log(uno);
// console.log(dos);

// const [, , tres, cuatro] = nombres;

// console.log(tres);
// console.log(cuatro);

// const nombresUno = ["Juan", "Julieta"];
// const nombresDos = ["Carlos", "Mariela"];

//================ SPREAD DE ARRAYS ================

// const nombres = [...nombresUno, ...nombresDos];

// const usuario = {
//   nombre: "Jesus",
//   edad: 25,
// };

//================ SPREAD DE OBJETOS ================

// const informacionUsuario = {
//   edad: "25.6",
//   pais: "CDMX",
//   profesion: "Desarrollador",
//   telefono: 5522334542,
// };

// const usuarioCompleto = {
//   ...usuario,
//   ...informacionUsuario,
// };

// console.log(usuarioCompleto);

// const productos = [
//   { nombre: "Cuaderno", precio: 15 },
//   { nombre: "Libro de js", precio: 50 },
//   { nombre: "Pluma", precio: 7 },
//   { nombre: "Borrador", precio: 5 },
//   { nombre: "Diccionario", precio: 100 },
// ];

//
// const productosConPrecioActualizado = productos.map((producto) => ({
//   nombre: producto.nombre,
//   precio: producto.precio * 1.1,
// }));
//

// const productosConPrecioActualizado = productos.map((producto) => ({
//   ...producto,
//   precio: producto.precio * 1.1,
// }));

// console.log(productosConPrecioActualizado);

//================ REST ================

function sumar(...numeros) {
  console.log("LOS PARÁMETROS RECIBIDOS SON: ");
  console.log(numeros);

  let sumatoria = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
  return sumatoria;
}

console.log(sumar(4, 2));
console.log(sumar(10, 15, 30, 5));
console.log(sumar(100, 300, 50));
