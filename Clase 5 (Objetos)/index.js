//================ OBJETOS ================

// const persona = {
//   nombre: "Jesus",
//   apellido: "Brito",
//   edad: 25,
//   pais: "México",
//   ciudad: "CDMX",
//   esDesarrollador: true,
// };

// console.log(persona);

// console.log("Nombre persona " + persona.nombre);
// console.log("Edad persona " + persona["edad"]);

// persona.edad = 80;
// console.log("Nueva edad persona " + persona.edad);

// persona["vida"] = 120;
// console.log("Nueva edad persona " + persona.edad);

//================ FUNCIÓN CONSTRUCTORA ================

// function Persona(nombre, apellido, edad, pais, ciudad, esDesarrollador) {
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.edad = edad;
//   this.pais = pais;
//   this.ciudad = ciudad;
//   this.esDesarrollador = esDesarrollador;
//   this.aumentarEdad = (anios) => this.edad + anios;
//   this.disminuirEdad = (anios) => this.edad - anios;
//   this.saludar = () =>
//     `Hola mi nombre es ${this.nombre} ${this.apellido}, mi edad es: ${this.edad}`;
// }

// function crearPersona() {
//   let nombre = prompt("Ingresa tu nombre");
//   let apellido = prompt("Ingresa tu apellido");
//   let edad = prompt("Ingresa tu edad");
//   let pais = prompt("Ingresa tu pais");
//   let ciudad = prompt("Ingresa tu ciudad");
//   let esDesarrollador = prompt("¿Eres desarrollador? (Si/No)");

//   if (esDesarrollador.toLowerCase() == "Si") {
//     esDesarrollador = true;
//   } else {
//     esDesarrollador = false;
//   }

//   const objetoPersona = new Persona(
//     nombre,
//     apellido,
//     edad,
//     pais,
//     ciudad,
//     esDesarrollador
//   );
//   return objetoPersona;
// }

// const personaUno = crearPersona();
// console.info(personaUno);

//================ OPERADOR IN ================

// const isNombreEnObjeto = "nombre" in personaUno;
// console.log("La propiedad nombre existe en el objeto?: " + isNombreEnObjeto);

// const isOrigenEnObjeto = "origen" in personaUno;
// console.log("La propiedad origen existe en el objeto?: " + isOrigenEnObjeto);

//================ OPERADOR FOR IN ================

// for (const propiedad in personaUno) {
//   console.log(`${propiedad}: ${personaUno[propiedad]}`);
// }

//================ CLASES ================

class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.vendido = false;
  }
  aumentarPrecio(precioAumentar) {
    this.precio += precioAumentar;
  }
  vender() {
    this.vendido = true;
  }
  disminuirPrecio = (precioDiminuir) => (this.precio -= precioDiminuir);
  aplicarPromo = (promoCode) => {
    if (promoCode === "DESCUENTO100") {
      this.precio -= this.precio * 0.05;
    }
  };
  reducirStock = (cantidad) => (this.cantidad -= cantidad);
  aumentarStock = (cantidad) => (this.cantidad += cantidad);
}

let nombreProducto = "Laptop HP";
let precioCompra = 800;
let precioVenta = 10;

const LAPTOP = new Producto(nombreProducto, precioCompra, precioVenta);

LAPTOP.aumentarPrecio(100);
console.log("Precio laptop: " + LAPTOP.precio);

LAPTOP.vender();

console.log("Estatus vendido laptop: " + LAPTOP.vendido);

LAPTOP.aplicarPromo("DESCUENTO100");
console.log("Precio laptop: " + LAPTOP.precio);
