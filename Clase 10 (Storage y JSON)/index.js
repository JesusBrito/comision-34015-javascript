//================ SESSION STORAGE  ================
//Se utiliza para almacenar información en el navegador,
// esta información se elimina si se cierra el navegador
// o se cierra la pestaña

// let variableAlmacenar = "TOKEN_SEGURO";

// sessionStorage.setItem("token", variableAlmacenar);
// let textoAlmacenado = localStorage.getItem("token");
//console.log(textoAlmacenado)

//================ LOCAL STORAGE  ================
// let variableAlmacenar = "TOKEN_SEGURO";

// localStorage.setItem("token_ls", variableAlmacenar);
// let textoAlmacenado = localStorage.getItem("token_ls");
// console.log(textoAlmacenado)

//================ RECORRER LOCAL STORAGE O SESSION STORAGE ================
// let tokenAlmacenar = "TOKEN_SEGURO";
// let usuarioAlmacenar = "Jesus_B";

// localStorage.setItem("token_ls", tokenAlmacenar);
// localStorage.setItem("usuario_ls", usuarioAlmacenar);

// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);
//   console.log("Clave: " + clave);
//   console.log("Valor: " + localStorage.getItem(clave));
// }

//================ ELIMINAR ELEMENTOS DEL LOCAL STORAGE O SESSION STORAGE ================

// localStorage.removeItem("token_ls");
// localStorage.clear();

//================ AGREGAR OBJETO AL LOCAL STORAGE O SESSION STORAGE ================
// const listaProductos = [
//   {
//     id: 1,
//     nombre: "Laptop",
//     precioCompra: "800",
//     precioVenta: "1100",
//     cantidad: 2,
//   },
//   {
//     id: 2,
//     nombre: "PC",
//     precioCompra: "900",
//     precioVenta: "1500",
//     cantidad: 3,
//   },
// ];

// let listaProductosJSON = JSON.stringify(listaProductos);
// localStorage.setItem("arrayProductos", listaProductosJSON);

// let productosAlmacenados = localStorage.getItem("arrayProductos");
// console.log(typeof productosAlmacenados, productosAlmacenados);

// let productosArray = JSON.parse(productosAlmacenados);
// console.log(typeof productosArray, productosArray);

//================ EJEMPLO COMPLETO  ================

// Variables de información
let productos = [];
let usuario;

// Variables para elementos de autenticación y usuario

let formularioIdentificacion;
let contenedorIdentificacion;
let contenedorUsuario;
let textoUsuario;
let limpiarStorage;

// Variables para formulario de productos
let formulario;
let inputId;
let inputNombre;
let inputPrecioCompra;
let inputPrecioVenta;
let inputCantidad;
let contenedorProductos;

class Producto {
  constructor(id, nombre, precioCompra, precioVenta, cantidad) {
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.precioCompra = precioCompra;
    this.precioVenta = precioVenta;
    this.cantidad = cantidad;
  }
}

function inicializarElementos() {
  formularioIdentificacion = document.getElementById(
    "formularioIdentificacion"
  );
  inputUsuario = document.getElementById("inputUsuario");
  contenedorIdentificacion = document.getElementById(
    "contenedorIdentificacion"
  );
  contenedorUsuario = document.getElementById("contenedorUsuario");
  textoUsuario = document.getElementById("textoUsuario");
  limpiarStorage = document.getElementById("limpiarStorage");

  formulario = document.getElementById("formulario");
  inputId = document.getElementById("inputId");
  inputNombre = document.getElementById("inputNombreProducto");
  inputPrecioCompra = document.getElementById("inputPrecioCompra");
  inputPrecioVenta = document.getElementById("inputPrecioVenta");
  inputCantidad = document.getElementById("inputCantidad");
  contenedorProductos = document.getElementById("contenedorProductos");
}

function inicializarEventos() {
  formulario.onsubmit = (event) => validarFormulario(event);
  formularioIdentificacion.onsubmit = (event) => identificarUsuario(event);
  limpiarStorage.onclick = eliminarStorage;
}

function eliminarStorage() {
  localStorage.clear();
  usuario = "";
  productos = [];
  mostrarFormularioIdentificacion();
  pintarProductos();
}

function identificarUsuario(event) {
  event.preventDefault();
  usuario = inputUsuario.value;
  formularioIdentificacion.reset();
  actualizarUsuarioStorage();
  mostrarTextoUsuario();
}

function mostrarTextoUsuario() {
  contenedorIdentificacion.hidden = true;
  contenedorUsuario.hidden = false;
  textoUsuario.innerHTML += ` ${usuario}`;
}

function mostrarFormularioIdentificacion() {
  contenedorIdentificacion.hidden = false;
  contenedorUsuario.hidden = true;
  textoUsuario.innerHTML = ``;
}

function validarFormulario(event) {
  event.preventDefault();
  if (usuario) {
    let idProducto = inputId.value;
    let nombre = inputNombre.value;
    let precioCompra = parseFloat(inputPrecioCompra.value);
    let precioVenta = parseFloat(inputPrecioVenta.value);
    let cantidad = parseInt(inputCantidad.value);

    const idExiste = productos.some((producto) => producto.id === idProducto);
    if (!idExiste) {
      let producto = new Producto(
        idProducto,
        nombre,
        precioCompra,
        precioVenta,
        cantidad
      );

      productos.push(producto);
      formulario.reset();
      actualizarProductosStorage();
      pintarProductos();
    } else {
      alert("El id ya existe");
    }
  } else {
    alert("Identifíquese antes de agregar un producto");
  }
}

function eliminarProducto(idProducto) {
  let columnaBorrar = document.getElementById(`columna-${idProducto}`);
  let indiceBorrar = productos.findIndex(
    (producto) => Number(producto.id) === Number(idProducto)
  );

  productos.splice(indiceBorrar, 1);
  columnaBorrar.remove();
  actualizarProductosStorage();
}

function pintarProductos() {
  contenedorProductos.innerHTML = "";
  productos.forEach((producto) => {
    let column = document.createElement("div");
    column.className = "col-md-4 mt-3";
    column.id = `columna-${producto.id}`;
    column.innerHTML = `
            <div class="card">
                <div class="card-body">
                <p class="card-text">ID:
                    <b>${producto.id}</b>
                </p>
                <p class="card-text">Nombre:
                    <b>${producto.nombre}</b>
                </p>
                <p class="card-text">Precio compra:
                    <b>${producto.precioCompra}</b>
                </p>
                <p class="card-text">Precio venta:
                    <b>${producto.precioVenta}</b>
                </p>
                <p class="card-text">Cantidad:
                    <b>${producto.cantidad}</b>
                </p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-danger" id="botonEliminar-${producto.id}" >Eliminar</button>
                </div>
            </div>`;

    contenedorProductos.append(column);

    let botonEliminar = document.getElementById(`botonEliminar-${producto.id}`);
    botonEliminar.onclick = () => eliminarProducto(producto.id);
  });
}

function actualizarProductosStorage() {
  let productosJSON = JSON.stringify(productos);
  localStorage.setItem("productos", productosJSON);
}

function actualizarUsuarioStorage() {
  localStorage.setItem("usuario", usuario);
}

function obtenerProductosStorage() {
  let productosJSON = localStorage.getItem("productos");
  if (productosJSON) {
    productos = JSON.parse(productosJSON);
    pintarProductos();
  }
}

function obtenerUsuarioStorage() {
  let usuarioAlmacenado = localStorage.getItem("usuario");
  if (usuarioAlmacenado) {
    usuario = usuarioAlmacenado;
    mostrarTextoUsuario();
  }
}

function main() {
  inicializarElementos();
  inicializarEventos();
  obtenerProductosStorage();
  obtenerUsuarioStorage();
}

main();
