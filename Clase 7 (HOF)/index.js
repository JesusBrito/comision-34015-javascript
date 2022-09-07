//================ ABSTRACCIÓN ================
//La abstracción es una capacidad intelectual 
//que consiste en separar un elemento de su contexto 
//para analizarlo y hacerse un concepto de este.

//=============================================

//Abstraer es formar una idea general a partir de casos particulares.

//=============================================

//La abstracción la podemos definir como el proceso de identificar 
//aquellas características (atributos) 
//y acciones o comportamientos (métodos) 
//propios de un elemento o proceso que deseemos representar. 

//Ejemplo de la mesa

//================ FUNCIONES DE ORDEN SUPERIOR ================

//Devolver una función
function mayorQueUnNumero(numero) {
  return (numeroAComparar) => numeroAComparar > numero
}

let mayorQueDiez = mayorQueUnNumero(10)

console.log( mayorQueDiez(20) )
console.log( mayorQueDiez(5) )

let mayorQueVeinte = mayorQueUnNumero(20)
console.log( mayorQueVeinte(22) )
console.log( mayorQueVeinte(10) )

//Recibir una función

const numeros = [1, 2, 3, 4];

function porCadaUno(arreglo, funcionAEjecutar) {
  for (const elemento of arreglo) {
    funcionAEjecutar(elemento);
  }
}

function imprimirValor(valor){
  alert(valor)
}

porCadaUno(numeros, imprimirValor);

let total = 0;
function acumular(num) {
  total += num;
}

porCadaUno(numeros, acumular);
alert("El total es:" + total);

//================ DIFERENTES PARADIGMAS ================

//PROGRAMACIÓN IMPERATIVA / TRADICIONAL
//se basa en dar instrucciones al ordenador de como hacer 
//las cosas en forma de algoritmos, en lugar de describir 
//el problema o la solución.

let arrayPaises = ["Argentina", "Venezuela", "Colombia", "México"];

let existeArgentina = false;

for (const pais of arrayPaises) {
  if (pais === "Argentina") {
    existeArgentina = true;
    break;
  }
}

//PROGRAMACIÓN DECLARATIVA / FUNCIONAL
// Nos enfocaremos en "qué" estamos haciendo y no en "cómo" 
//se está haciendo que sería el enfoque imperativo. 
//Esto quiere decir que nosotros expresaremos nuestra 
//lógica sin describir controles de flujo;
// no usaremos ciclos o condicionales.

existeArgentina = arrayPaises.some((elemento) => elemento === "Argentina");

console.log(existeArgentina)

//================ FOR EACH ================
//REALIZAR UNA ACCIÓN POR CADA ELEMENTO DEL ARRAY

// let arrayPaises = ["Argentina", "Venezuela", "Colombia", "México"];

// arrayPaises.forEach((elemento) => {
//     console.log(elemento)
// })

//================ FIND ================
//Encontrar el primer elemento del array que cumplen con una
//condición, si no existe ningún elemento retorna undefined

// let arrayPaises = ["Argentina", "Venezuela", "Colombia", "México"];

// let elementoEncontrado = arrayPaises.find((elemento)=> elemento === "Argentina")

// console.log(elementoEncontrado)

// let arrayProductos = [
//   { nombre: "Laptop", precio: 1000, cantidad: 3 },
//   { nombre: "PC", precio: 800, cantidad: 2 },
//   { nombre: "iPhone", precio: 1200, cantidad: 5 },
// ];

// let elementoEncontrado = arrayProductos.find(
//   (elemento) => elemento.nombre === "Laptop"
// );

// console.log(elementoEncontrado);

//================ SOME ================
//Encontrar el primer elemento del array que cumplen con una
//condición, si no existe ningún elemento retorna undefined

// let arrayPaises = ["Argentina", "Venezuela", "Colombia", "México"];

// let elementoExiste = arrayPaises.some((elemento)=> elemento === "Argentina")

// console.log(elementoExiste)

// let arrayProductos = [
//   { nombre: "Laptop", precio: 1000, cantidad: 3 },
//   { nombre: "PC", precio: 800, cantidad: 2 },
//   { nombre: "iPhone", precio: 1200, cantidad: 5 },
// ];

// let elementoExiste = arrayProductos.some(
//   (elemento) => elemento.nombre === "Laptop"
// );

// console.log(elementoExiste);

//================ FILTER ================
//Encontrar todos los elementos del array que cumplen con una
//condición, si no existe ningún elemento retorna un array vacío

// let arrayProductos = [
//   { nombre: "Laptop", precio: 1000, cantidad: 3 },
//   { nombre: "PC", precio: 800, cantidad: 2 },
//   { nombre: "iPhone", precio: 1200, cantidad: 5 },
// ];

// let elementosEncontrados = arrayProductos.filter(
//   (elemento) => elemento.precio >= 1000
// );

// console.log(elementosEncontrados)

//================ MAP ================
//Transformar el Array original y crear uno nuevo con la misma
//cantidad de elementos del original,
//las transformaciones se realizan con base en la función
//proporcionada

// let arrayProductos = [
//   { nombre: "Laptop", precio: 1000, cantidad: 3 },
//   { nombre: "PC", precio: 800, cantidad: 2 },
//   { nombre: "iPhone", precio: 1200, cantidad: 5 },
// ];

// let nuevoArray = arrayProductos.map((elemento) => ({
//   nombre: elemento.nombre,
//   cantidad: elemento.cantidad,
//   precio: elemento.precio * 1.20,
// }));

// console.log(nuevoArray)

//================ REDUCE ================
//Obtener un único valor tras iterar sobre todo el array

// let arrayProductos = [
//   { nombre: "Laptop", precio: 1000, cantidad: 3 },
//   { nombre: "PC", precio: 800, cantidad: 2 },
//   { nombre: "iPhone", precio: 1200, cantidad: 5 },
// ];

//el método reduce recibe dos parámetros, el primero es la función
//el segundo es el valor con el que se inicializa el acumulador.
//la función recibe dos parámetros, el acumulador y el elemento
//que se está iterando

// let precioTotal = arrayProductos.reduce(
//   (acumulador, elemento) => acumulador + elemento.precio,
//   0
// );

// console.log(precioTotal);

//================ SORT ================
//ordenar los elementos de un array
//este método es destructivo

// const numeros = [1, 3, 5, 2, 4, 9];

// numeros.sort((a, b) => a - b);

// console.log(numeros)

// let arrayProductos = [
//   { nombre: "Laptop", precio: 1000, cantidad: 3 },
//   { nombre: "PC", precio: 800, cantidad: 2 },
//   { nombre: "iPhone", precio: 1200, cantidad: 5 },
// ];

// arrayProductos.sort((a, b) => a.precio - b.precio);

// arrayProductos.sort((a, b) => {
//   if (a.nombre.length > b.nombre.length) {
//     return 1;
//   }
//   if (a.nombre.length < b.nombre.length) {
//     return -1;
//   }
//   return 0;
// });

// console.log(arrayProductos);

//================ OBJETO MATH ================

//Colección de métodos y propiedades para hacer operaciones
//matemáticas complejas

//Constante de euler
console.log(Math.E);

//Constante de PI
console.log(Math.PI);

//Obtener el número mayor de una lista de números
console.log(Math.max(55, 13, 0, -25, 93, 4));

//Obtener el número menor de una lista de números
console.log(Math.min(55, 13, 0, -25, 93, 4));

const pi = Math.PI; // 3.141592653589793

//================ REDONDEAR ================

// CEIL: devuelve el entero mayor o igual más próximo
console.log(Math.ceil(pi)); // 4

// FLOOR: devuelve el entero más cercano redondeado hacia abajo
console.log(Math.floor(pi)); // 3

// ROUND: retorna el valor de un número redondeado al entero más cercano
console.log(Math.round(pi)); // 3

//================ RAÍZ CUADRADA ================

Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095
Math.sqrt(1); // 1
Math.sqrt(-1); // NaN

//================ ALEATORIO ================

console.log(Math.random());

// números entre 0 y 10
console.log(Math.random() * 10);
// números entre 0 y 50
console.log(Math.random() * 50);
// números entre 20 y 50
console.log(Math.random() * 30 + 20);

//================ DATE ================

// console.log(new Date());

// console.log(new Date(2020, 1, 15))

// const casiNavidad = new Date(2021, 11, 25, 23, 59, 59)
// console.log(casiNavidad)

// const casiNavidadString = new Date("December 25, 2021 23:59:59")
// console.log(casiNavidadString)

//================ OBTENER VALORES DE LA FECHA ================

// const hoy = new Date()

// console.log(hoy.getFullYear())
// console.log(hoy.getMonth())
// console.log(hoy.getDay())

//================ FORMATOS FECHA ================

// const hoy = new Date("December 17, 2021")

// console.log( hoy.toDateString() )
// console.log( hoy.toLocaleString() )
// console.log( hoy.toLocaleDateString() )
// console.log( hoy.toTimeString() ) 

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
