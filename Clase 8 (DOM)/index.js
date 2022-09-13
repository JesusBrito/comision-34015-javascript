//================ OBJETO GLOBAL document ================
console.log(document);

//================ NODOS RAÍZ ================
console.log(document.head);
console.log(document.body);

//================ OBTENER ELEMENTO POR ID  ================

let divUno = document.getElementById("contenedor-ejemplo-dos");
let parrafoUno = document.getElementById("parrafo1");
console.log(divUno.innerHTML);
console.log(parrafoUno.innerHTML);

//================ OBTENER ELEMENTOS POR CLASS NAME  ================

let listaDivs = document.getElementsByClassName("contenedor-ejemplo-tres");
console.log(listaDivs);

for (const div of listaDivs) {
  console.log(div.innerHTML);
}

//================ OBTENER ELEMENTO POR TAG NAME  ================

let listaItems = document.getElementsByTagName("li");
console.log(listaItems);
for (const item of listaItems) {
  console.log(item.innerText);
} 

//================ OBTENER ELEMENTO USANDO QUERY SELECTOR  ================

// let parrafo = document.querySelector("#contenedor p")

// let contenedor = document.querySelector("#contenedor")

// parrafo = document.querySelector(".texto")

//================ AGREGAR TEXTO A UN PÁRRAFO MEDIANTE JAVASCRIPT  ================

// let parrafo = document.getElementById("parrafo-cinco");
// console.log(parrafo.innerText);
// parrafo.innerText = "Hola!!, Este es un parrafo modificado";
// console.log(parrafo.innerText);

//================ MODIFICAR EL INNER HTML MEDIANTE JAVASCRIPT  ================

// let contenedor = document.getElementById("contenedor-seis");
// contenedor.innerHTML =
//   "<h2>Hola!</h2><p>este es un texto agregado desde Javascript</p>";

//================ AGREGAR CLASES CSS MEDIANTE JAVASCRIPT  ================

// let contenedor = document.getElementById("contenedor-siete");
// contenedor.className = "bg-blue";

//================ OBTENER/AGREGAR VALOR DE UN INPUT  ================

// let inputCorreo = document.getElementById("inputCorreo");
// let inputContrasenia = document.getElementById("inputContrasenia");

// console.log(inputCorreo.value);
// inputCorreo.value = "jesus@prueba.com";
// console.log(inputCorreo.value);

// console.log(inputContrasenia.value);

//================ EJEMPLO COMPLETO  ================

const listaProductos = [
  {
    id: 1,
    nombre: "Laptop",
    precioCompra: "800",
    precioVenta: "1100",
    cantidad: 2,
  },
  {
    id: 2,
    nombre: "PC",
    precioCompra: "900",
    precioVenta: "1500",
    cantidad: 3,
  },
  {
    id: 3,
    nombre: "Impresora",
    precioCompra: "500",
    precioVenta: "800",
    cantidad: 5,
  },
  { id: 4, nombre: "USB", precioCompra: "25", precioVenta: "30", cantidad: 50 },
];

const contenedorProductos = document.getElementById("contenedor-productos");

for (const producto of listaProductos) {
  let column = document.createElement("div");
  column.className = "col-md-4 mt-3 ";
  column.id = `columna-${producto.id}`;
  column.innerHTML = `
      <div class="card">
          <div class="card-body">
          <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
          <p class="card-text">Precio compra: <b>${producto.precioCompra}</b></p>
          <p class="card-text">Precio venta: <b>${producto.precioVenta}</b></p>
          <p class="card-text">Cantidad: <b>${producto.cantidad}</b></p>
          </div>
      </div>`;

  contenedorProductos.append(column);
}
/*
  let columnaBorrar = document.getElementById("columna-1")
  
  columnaBorrar.remove()
  */
