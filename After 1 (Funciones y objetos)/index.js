//========= CONCEPTO THIS =========
// console.log(this);

// var name = "name window";

// let objetoPrueba = {
//   name: "name object",
//   getName: obtenerNombre,
// };

// function obtenerNombre() {
//   console.log(this);
//   console.log("Mi nombre es: " + this.name);
// }

// obtenerNombre();
// objetoPrueba.getName();

//========= EJEMPLO AVANZADO =========
let miProducto;

class Producto {
  constructor(nombre, precioCompra, precioVenta, cantidad) {
    this.nombre = nombre;
    this.precioVenta = precioVenta;
    this.precioCompra = precioCompra;
    this.cantidad = cantidad;
  }

  vender() {
    console.log(this);
    if (this.cantidad > 0) {
      this.disminuirStock(1);
    } else {
      alert("Ya no hay disponibilidad");
    }
  }
  aumentarPrecio = (precio) => (this.precioVenta += precio);
  disminuirPrecio = (precio) => (this.precioVenta -= precio);
  aumentarStock = (cantidad) => (this.cantidad += cantidad);
  disminuirStock = (cantidad) => (this.cantidad -= cantidad);
}

function obtenerDatosDeProducto() {
  let nombre = prompt("Ingresa el nombre del producto");
  let precio = parseFloat(prompt("Ingresa el precio de venta del producto"));
  let precioCompra = parseFloat(
    prompt("Ingresa el precio de compra del producto")
  );
  let cantidad = parseInt(prompt("Ingresa la cantidad de productos"));

  const objetoProducto = new Producto(nombre, precioCompra, precio, cantidad);
  return objetoProducto;
}

function mostrarMenu() {
  const OPCION = prompt(
    "Bienvenido, seleccione una opción (ESC para salir)\n1. Agregar datos del producto\n2. Aumentar precio\n3. Disminuir precio\n4. Aumentar stock\n5. Disminuir stock\n6. Vender\n7. Mostrar información del producto"
  );
  return OPCION;
}

function convertirObjetoEnTexto(objeto) {
  let texto = "";
  for (const clave in objeto) {
    if (typeof objeto[clave] !== "function")
      texto += clave + " : " + objeto[clave] + "\n";
  }
  return texto;
}

function procesarInventario() {
  let opcionSeleccionada = mostrarMenu();
  while (opcionSeleccionada?.toLowerCase() != "esc") {
    if (opcionSeleccionada != "") {
      opcionSeleccionada = parseInt(opcionSeleccionada);
      if (!isNaN(opcionSeleccionada)) {
        switch (opcionSeleccionada) {
          case 1:
            miProducto = obtenerDatosDeProducto();
            break;
          case 2:
            const PRECIO_A_AUMENTAR = parseFloat(
              prompt("Ingrese en cuanto aumenta el precio del producto")
            );
            miProducto.aumentarPrecio(PRECIO_A_AUMENTAR);
            break;

          case 3:
            const PRECIO_A_DISMINUIR = parseFloat(
              prompt("Ingrese en cuanto disminuye el precio del producto")
            );
            miProducto.disminuirPrecio(PRECIO_A_DISMINUIR);
            break;

          case 4:
            const PRODUCTOS_A_AUMENTAR = parseInt(
              prompt("Ingrese la cantidad de productos a aumentar")
            );
            miProducto.aumentarStock(PRODUCTOS_A_AUMENTAR);
            break;

          case 5:
            const PRODUCTOS_A_DISMINUIR = parseInt(
              prompt("Ingrese la cantidad de productos a disminuir")
            );
            miProducto.disminuirStock(PRODUCTOS_A_DISMINUIR);
            break;

          case 6:
            miProducto.vender();
            break;

          case 7:
            const OBJETO_TEXTO = convertirObjetoEnTexto(miProducto);
            alert(OBJETO_TEXTO);
            break;

          default:
            alert("Opcion Incorrecta");
            break;
        }
      } else {
        alert("Ingresó una letra");
      }
    } else {
      alert("Seleccione la opción");
    }
    opcionSeleccionada = mostrarMenu();
  }
}

function main() {
  miProducto = obtenerDatosDeProducto();
  procesarInventario();
}

main();
