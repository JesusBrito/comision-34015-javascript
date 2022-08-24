//================COMPARACIÓN PROCESO REPETITIVO================

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// for (let index = 1; index <= 5; index++) {
//     console.log(index)
// }

//================CALCULAR PROMEDIO DADO UN NUMERO DE CALIFICACIONES================
// let numeroCalificaciones = prompt("¿Cuantas calificaciones son?");
// let sumatoria = 0;
// let promedio = 0;

// for (let index = 1; index < numeroCalificaciones; index++) {
//   let calificacion = prompt("Ingrese la calificación " + index);
//   sumatoria = sumatoria + parseFloat(calificacion);
// }
// promedio = sumatoria / numeroCalificaciones;

// alert("El promedio es: "+ promedio);

//================BREAK================
/*
    Escribir un programa que imprima todos 
    los números hasta encontrar el primer divisor
    entre 10 
*/

// for (let index = 1; index <= 30; index++) {
//   if (index % 10 == 0) {
//     break;
//   }
//   console.log(index);
// }

//================CONTINUE================
/*
    Escribir un programa que imprima todos 
    los números enteros del 1 al 100
*/

// for (let index = 1; index <= 10; index++) {
//   if (index % 2 != 0) {
//     continue;
//   }
//   console.log(index);
// }

//================EJERCICIO PRÁCTICO FOR================
/*
    Escribir un programa que muestre en pantalla 
    los números del 1 al 100, sustituyendo los 
    múltiplos de 3 por la palabra “fizz”, 
    los múltiplos de 5 por “buzz” y 
    los múltiplos de ambos, es decir, 
    los múltiplos de 3 y 5 (o de 15), 
    por la palabra “fizzbuzz”.
*/

// for (let index = 1; index <= 100; index++) {
//   if (index % 3 == 0 && index % 5 == 0) {
//     console.log("fizzbuzz");
//   } else if (index % 3 == 0) {
//     console.log("fizz");
//   } else if (index % 5 == 0) {
//     console.log("buzz");
//   } else {
//     console.log(index);
//   }
// }

//================WHILE================

// let entrada = prompt("Ingresar un dato (ESC para salir)");
// while (entrada != "ESC") {
//   alert("El usuario ingresó " + entrada);
//   entrada = prompt("Ingresar otro dato");
// }

//================ALERTA================
/*
    NO DES COMENTAR, PUEDE CAUSAR BLOQUEOS 
    EN TU NAVEGADOR LOS BUCLES INFINITOS MUY RARA VEZ 
    SON ÚTILES Y DEBEN EVITARSE
 */

/*
while(true){
    alert("Este es un mensaje infinito")
}
*/

//================DO WHILE================

// let nombre = "";

// do {
//   nombre = prompt("Ingresar un dato nombre");
//   if (nombre !== "") {
//     alert("El nombre ingresado es: " + nombre);
//   }
// } while (nombre != "");

//================ SWITCH ================

// let valor = 1;
// switch (valor) {
//   case 1:
//     console.log("Valor 1");
//     break;
//   case 2:
//     console.log("Valor 2");
//     break;
//   case 3:
//     console.log("Valor 3");
//     break;
//   default:
//     console.log("Valor Default")
//     break;
// }

// let seleccionUsuario = parseInt(
//   prompt(
//     "Que desea comer: \n 1.Una Hamburguesa \n 2.Un Taco \n 3.Un Hot dog \n 4.Unos Nachos"
//   )
// );
// if (seleccionUsuario === 1) {
//   alert("Usted selecciono una Hamburguesa");
// } else if (seleccionUsuario === 2) {
//   alert("Usted selecciono un Taco");
// } else if (seleccionUsuario === 3) {
//   alert("Usted selecciono un Hot dog");
// } else if (seleccionUsuario === 4) {
//   alert("Usted selecciono un Hot dog");
// }

// let seleccionUsuario = parseInt(
//   prompt(
//     "Que desea comer: \n 1.Una Hamburguesa \n 2.Un Taco \n 3.Un Hot dog \n 4.Unos Nachos"
//   )
// );

// switch (seleccionUsuario) {
//   case 1:
//     alert("Usted selecciono una Hamburguesa");
//     break;
//   case 2:
//     alert("Usted selecciono un Taco");
//     break;
//   case 3:
//     alert("Usted selecciono un Hot dog");
//     break;
//   case 4:
//     alert("Usted selecciono un Hot dog");
//     break;
//   default:
//     alert("Opción inválida");
//     break;
// }
