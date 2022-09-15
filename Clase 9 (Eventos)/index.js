//================ EVENTO CLICK  ================
// let botonUno = document.getElementById("btnEventoUno")
// let botonDos = document.getElementById("btnEventoDos")

// botonUno.addEventListener("click", () => {
//   alert("Se oprimió el boton uno")
// })

// botonDos.onclick = () => {
//   alert("Se oprimió el botón dos")
// }

// function mostrarAlert(){
//   alert("Se oprimió el botón tres")
// }

//================ EVENTO GENERALES EN BOTONES  ================

// let boton = document.getElementById("boton")

// boton.onmousedown = () => {
//   console.log("Evento mouse down")
// }

// boton.onmouseup = () => {
//   console.log("Evento mouse up")
// }

// boton.onmouseover = () => {
//   console.log("Evento mouse over")
// }

// boton.onmouseout = () => {
//   console.log("Evento mouse out")
// }

// boton.onmousemove = () => {
//   console.log("Evento mouse move")
// }

//================ EVENTO GENERALES EN INPUTS  ================

// let inputNombre = document.getElementById("nombre");
// let inputEdad = document.getElementById("edad");

// inputNombre.onkeydown = () => {
//   alert("Se oprimió un boton, evento down")
// }

// inputNombre.onkeyup = () => {
//   alert("Se oprimió un boton, evento up")
// }

// inputNombre.onchange = () => {
//   console.log("se ejecuta evento onchange, input nombre");
// };

// inputEdad.onchange = () => {
//   console.log("se ejecuta evento onchange, input edad");
// };

// inputNombre.oninput = () => {
//   console.log("se ejecuta evento oninput, input nombre");
// };

// inputEdad.oninput = () => {
//   console.log("se ejecuta evento oninput, input edad");
// };

//================ EVENTO SCROLL  ================

// window.addEventListener("scroll", function (event) {
//     console.log(event, window.pageYOffset)
// });

//================ EVENTO SUBMIT  ================

// let miFormulario = document.getElementById("formulario");
// miFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e) {
//   e.preventDefault();
//   console.log(e);
//   console.log("Formulario Enviado");
// }

//================ EJEMPLO COMPLETO  ================

let productos = [];

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
  calcularPrecioCompra = () => this.precioCompra * this.cantidad;
  calcularPrecioVenta = () => this.precioVenta * this.cantidad;
}

function inicializarElementos() {
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
}

function validarFormulario(event) {
  event.preventDefault();
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

    pintarProductos();
  } else {
    alert("El id ya existe");
  }
}

function eliminarProducto(idProducto) {
  let columnaBorrar = document.getElementById(`columna-${idProducto}`);
  let indiceBorrar = productos.findIndex(
    (producto) => Number(producto.id) === Number(idProducto)
  );

  productos.splice(indiceBorrar, 1);
  columnaBorrar.remove();
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

function main() {
  inicializarElementos();
  inicializarEventos();
}

main();
