//================FUNCIÓN SENCILLA================

// function iniciarSesion() {
//   const USUARIO = prompt("Ingresa tu usuario");
//   const PASSWORD = prompt("Ingresa tu contraseña");

//   if (USUARIO == "admin" && PASSWORD == "123456") {
//     alert("Bienvenido " + USUARIO);
//   } else {
//     alert("Usuario o contraseña incorrectos");
//   }
// }

// iniciarSesion();

//================FUNCIÓN CON PARÁMETROS================

// function sumarDosNumeros(numeroUno, numeroDos) {
//   let suma = numeroUno + numeroDos;
//   alert("La suma es: " + suma);
// }

// const NUMERO_UNO = parseFloat(prompt("Ingresar el primer número"));
// const NUMERO_DOS = parseFloat(prompt("Ingresar el segundo número"));

// sumarDosNumeros(NUMERO_UNO, NUMERO_DOS);

//================FUNCIÓN CON RETURN================

// function sumarCalificaciones(
//   calificacionUno,
//   calificacionDos,
//   calificacionTres
// ) {
//   let sumatoria = calificacionUno + calificacionDos + calificacionTres;
//   return sumatoria;
// }
// function mostrarPromedio() {
//   let resultadoSumatoria = sumarCalificaciones(10, 8, 9);
//   let promedio = resultadoSumatoria / 3;
//   alert("El promedio es: " + promedio);
// }
// mostrarPromedio();

//================CALCULADORA================

// function suma(numeroUno, numeroDos) {
//   let resultado = numeroUno + numeroDos;
//   return resultado;
// }
// function resta(numeroUno, numeroDos) {
//   let resultado = numeroUno - numeroDos;
//   return resultado;
// }
// function multiplicacion(numeroUno, numeroDos) {
//   let resultado = numeroUno * numeroDos;
//   return resultado;
// }
// function division(numeroUno, numeroDos) {
//   let resultado = numeroUno / numeroDos;
//   return resultado;
// }
// function mostrarResultado(resultado) {
//   alert("El resultado es: " + resultado);
// }

// function calculadora() {
//   let opcion = parseInt(
//     prompt(
//       "Bienvenido, seleccione la opción \n 1.-Suma\n 2.- Resta\n 3.-Multiplicación\n 4.- División "
//     )
//   );
//   const NUMERO_UNO = parseFloat(prompt("Ingresar el primer número"));
//   const NUMERO_DOS = parseFloat(prompt("Ingresar el segundo número"));

//   switch (opcion) {
//     case 1:
//       let resultadoSuma = suma(NUMERO_UNO, NUMERO_DOS);
//       mostrarResultado(resultadoSuma);
//       break;
//     case 2:
//       let resultadoResta = resta(NUMERO_UNO, NUMERO_DOS);
//       mostrarResultado(resultadoResta);
//       break;
//     case 3:
//       let resultadoMultiplicacion = multiplicacion(NUMERO_UNO, NUMERO_DOS);
//       mostrarResultado(resultadoMultiplicacion);
//       break;
//     case 4:
//       let resultadoDivision = division(NUMERO_UNO, NUMERO_DOS);
//       mostrarResultado(resultadoDivision);
//       break;
//     default:
//       alert("Opción incorrecta");
//       break;
//   }
// }

// calculadora();

//================SCOPE================

let resultado = 0;

function sumar(primerNumero, segundoNumero) {
  resultado = primerNumero + segundoNumero;
}

sumar(5, 6);

//Se puede acceder a la variable resultado porque es global
alert(resultado);

function sumar(primerNumero, segundoNumero) {
  let resultado = primerNumero + segundoNumero;
}

alert(resultado);

let nombre = "John Doe"; // variable global

function saludar() {
  let nombre = "Juan"; // variable local
  alert(nombre);
}

//Accede a nombre global
alert(nombre); // → “John Doe”

//Accede a nombre local
saludar(); // → “Juan”

//================FUNCIONES ANÓNIMAS================

// const suma = function (valorUno, valorDos) {
//   let resultado = valorUno + valorDos;
//   return resultado;
// };

// alert("El resultado es: " + suma(15, 20));

//================ARROW FUNCTIONS================

// const suma = (valorUno, valorDos) => {
//   let resultado = valorUno + valorDos;
//   return resultado;
// };

// alert("El resultado es: " + suma(15, 20));

// const suma = (valorUno, valorDos) => valorUno + valorDos;

// alert("El resultado es: " + suma(15, 20));

//================EJEMPLO COMPLETO CON ARROW FUNCTIONS================

let precioProducto = 0;
let descuento = 0;

const IVA = 0.16;
const suma = (valorUno, valorDos) => valorUno + valorDos;
const resta = (valorUno, valorDos) => valorUno - valorDos;
const calcularIva = (subtotal) => subtotal * IVA;
const mostrarPrecioFinal = (precio) => alert(precio);

const solicitarValores = () => {
  precioProducto = parseFloat(prompt("Ingrese el precio del producto"));
  descuento = parseFloat(prompt("Ingrese el descuento en pesos"));
};

solicitarValores();

let subtotal = resta(precioProducto, descuento);
const VALOR_IVA = calcularIva(subtotal);
const PRECIO_FINAL = suma(subtotal, VALOR_IVA);

mostrarPrecioFinal(PRECIO_FINAL);
