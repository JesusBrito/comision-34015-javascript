//================ DECLARAR UN ARRAY ================

// let arrayCiudades = [];

// let arrayPalabras = ["Hola", "Mundo", "desde", "Javascript"];

// let arrayNumeros = [1, 2, 3, 4];

// let arrayBooleanos = [true, false, false];

// let arrayMixto = ["Hola", false, 4];

//================ ACCEDER A LOS ELEMENTOS DE UN ARRAY ================

//-> indice, es la poción del array en donde se encuentra un elemento
//-> los indices o posiciones inician en 0

// let arrayPaises = ["Argentina", "Venezuela", "Colombia", "México"];

// console.log(arrayPaises[0])

// console.log(arrayPaises[0] + arrayPaises[1])

//================ IMPRIMIR TODOS LOS ELEMENTOS DE UN ARRAY ================
//->length, propiedad para obtener el tamaño de un array

// console.log(arrayPaises.length)

// for (let index = 0; index < arrayPaises.length; index++) {
// console.log("indice: "+ index + " : "+ arrayPaises[index])
// }

//================ AGREGAR ELEMENTO A UN ARRAY ================

//push->Agrega elemento al final del array
// let arrayNombres = ["Pedro", "Juan", "David"];

// console.log(arrayNombres);
// arrayNombres.push("Alan");
// console.log(arrayNombres);

//unshift->Agrega elemento al inicio del array
// arrayNombres.push("Luis");
// console.log(arrayNombres);

//================ ELIMINAR ELEMENTO DE UN ARRAY ================

//pop->Elimina elemento al final del array
// arrayNombres.pop();
// console.log(arrayNombres);

//shift->Elimina elemento al inicio del array
// arrayNombres.shift();
// console.log(arrayNombres);

//================ ELIMINAR ELEMENTOS DE UN ARRAY ================
// let arrayProductos = ["Laptop", "PC", "Celular"];

//Primer parámetro el indice a partir del cual se va a eliminar,
//el segundo es cuantos elementos se van a eliminar

// arrayProductos.splice(0, 2);
// console.log("Nueva lista:");
// console.log(nuevaLista);

//================ CONCATENAR TODOS LOS ELEMENTOS DE UN ARRAY ================
// let arrayProductos = ["Laptop", "PC", "Celular"];

// let arrayConcatenado = arrayProductos.join("-")
// console.log(arrayConcatenado)

//================ CONCATENAR DOS ARRAYS ================
// let arrayProductos = ["Laptop", "PC", "Celular"];
// let arrayProductosDos = ["iPhone", "iPad", "Samsung s22"];

// let arrayCombinado = arrayProductos.concat(arrayProductosDos);

// console.log(arrayCombinado)

//================ COPIAR UNA PARTE DEL ARRAY ================
//Primer parámetro el indice a partir del cual se va a comenzar,
//a copiar, el segundo es en donde se va a finalizar pero el fin
//no está incluido

// let arrayProductos = ["Laptop", "PC", "Celular"];
// let porcionArray = arrayProductos.slice(1, 2)

//================ CONOCER EL INDEX DE UN ELEMENTO EN EL ARRAY ================

// let arrayProductos = ["Laptop", "PC", "Celular"];

// console.log(arrayProductos.indexOf("Laptop"))
// console.log(arrayProductos.indexOf("Samsung S22"))

//================ CONOCER SI UN ELEMENTO EXISTE EN EL ARRAY ================

// let arrayProductos = ["Laptop", "PC", "Celular"];

// console.log(arrayProductos.includes("Laptop"))
// console.log(arrayProductos.includes("Samsung S22"))

//================ INVIERTE UN ARRAY ================

// let arrayProductos = ["Laptop", "PC", "Celular"];

// //Reverse es destructivo, modifica el array original
// console.log(arrayProductos.reverse())

//================ FOR OF ================
// let arrayProductos = ["Laptop", "PC", "Celular"];
// for (const producto of arrayProductos) {
//   console.log(producto);
// }

//================ ELIMINAR UN ELEMENTO ESPECIFICO DE UN ARRAY ================

const nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];

function eliminarElemento(nombre) {
  let index = nombres.indexOf(nombre);
  if (index != -1) {
    nombres.splice(index, 1);
  }
}

let valorAEliminar = prompt("Ingrese un nombre");
eliminarElemento(valorAEliminar);
console.log(nombres);

//================ EJEMPLO COMPLETO ================

class Producto {
  constructor(nombre, precioCompra, precioVenta, cantidad) {
    this.nombre = nombre.toUpperCase();
    this.precioCompra = precioCompra;
    this.precioVenta = precioVenta;
    this.cantidad = cantidad;
  }
  calcularCosto = () => this.cantidad * this.precioCompra;
}

function agregarProductos() {
  let numeroProductos = parseInt(
    prompt("Cuantos productos necesita registrar")
  );
  let productos = [];
  for (let index = 0; index < numeroProductos; index++) {
    let nombre = prompt("Ingrese el nombre");
    let precioCompra = prompt("Ingrese el precio de compra");
    let precioVenta = prompt("Ingrese el precio de venta");
    let cantidad = prompt("Ingrese la cantidad");
    let productoARegistrar = new Producto(
      nombre,
      precioCompra,
      precioVenta,
      cantidad
    );
    productos.push(productoARegistrar);
  }
  return productos;
}

function mostrarProductos(productos) {
  for (const producto of productos) {
    console.log(producto);
    console.log(producto.nombre);
  }
}

function calcularCosto(productos) {
  let sumatoriaCosto = 0;
  for (const producto of productos) {
    sumatoriaCosto += producto.calcularCosto();
  }
  return sumatoriaCosto;
}

function main() {
  let productos = agregarProductos();
  mostrarProductos(productos);
  let costoAlmacen = calcularCosto(productos);
  alert("El costo total del almacén es: " + costoAlmacen);
}

main();
