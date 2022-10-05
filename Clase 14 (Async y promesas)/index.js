

//================ EJEMPLO PROCESO ASÍNCRONO ================

// setTimeout(() => {
//   console.log("Proceso asincrónico");
// }, 3000);

//================ EJEMPLO DE EJECUCIÓN SINCRONA Y ASÍNCRONA ================

// console.log("Inicia proceso");

// setTimeout(() => {
//   console.log("Mitad de proceso");
// }, 2000);

// console.log("Fin proceso");
//================ EJEMPLO DE INTERVAL ================


//================ EJEMPLO DE INTERVAL Y CLEAR INTERVAL ================

// let counter = 0;

// const interval = setInterval(() => {
//   counter++;
//   console.log("Counter: ", counter);

//   if (counter >= 5) {
//     clearInterval(interval);
//     console.log("Se removió el intervalo");
//   }
// }, 1000);

//================ EJEMPLO DE SIMULACIÓN DE CONSULTA A UN API ================

let contenedor = document.getElementById("contenedor-productos");

const BD = [
  { id: 1, nombre: "Producto 1", precio: 1500 },
  { id: 2, nombre: "Producto 2", precio: 2500 },
  { id: 3, nombre: "Producto 3", precio: 3500 },
  { id: 4, nombre: "Producto 4", precio: 3500 },
];

const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(BD);
    }, 3000);
  });
};

const pintarProductos = () => {
  productos.forEach((producto) => {
    const column = document.createElement("div");
    column.className = "col-md-3";
    column.innerHTML = `<div> 
                            <p>${producto.id}</p> 
                            <p>${producto.nombre}</p> 
                            <p>${producto.precio}</p> 
                        </div>`;
    contenedor.appendChild(column);
  });
};

let productos = [];

pedirProductos()
  .then((response) => {
    productos = [...response];
    console.log(response);
    pintarProductos();
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Esto se ejecuta al final");
  });