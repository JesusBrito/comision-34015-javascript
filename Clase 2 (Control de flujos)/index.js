//================ESTRUCTURA IF================
// const EDAD = prompt("Ingresa tu edad")

// if(EDAD == 18){
//     alert("Puedes consumir alcohol")
// }

// if(EDAD == 18) {
//     alert("Puedes consumir alcohol")
// }else{
//     alert("No puedes consumir alcohol")
// }

//================CONDICIONALES ANIDADOS================
// let vidaPersonaje = 30;

// if (vidaPersonaje == 100) {
//   alert("La vida está completa")
// } else if (vidaPersonaje == 50) {
//   alert("La vida está a la mitad")
// } else if (vidaPersonaje == 0) {
//   alert("Muerto");
// } else if (vidaPersonaje < 20) {
//   alert("La vida esta peligrosamente baja")
// }else {
//     alert("La vida del personaje es: " + vidaPersonaje)
// }

//================OPERADORES DE COMPARACIÓN================

//================MAYOR O IGUAL================
// const EDAD = prompt("Ingresa tu edad")
// if(EDAD >= 18) {
//     alert("Puedes consumir alcohol")
// }else{
//     alert("No puedes consumir alcohol")
// }

//================DIFERENTE================
// const NUMERO_UNO = prompt("Ingrese el primer número")
// const NUMERO_DOS = prompt("Ingrese el segundo número")
// if(NUMERO_UNO != NUMERO_DOS){
//     alert("Los números no son iguales")
// }else {
//     alert("Los números son iguales")
// }

//================ESTRICTAMENTE IGUAL================
// let NUMERO_UNO = 1
// let NUMERO_DOS = "1"

// if (NUMERO_UNO == NUMERO_DOS) {
//   alert("Los números son iguales")
// } else {
//   alert("Los números no son iguales")
// }

// if (NUMERO_UNO === NUMERO_DOS) {
//   alert("Los números son iguales")
// } else {
//   alert("Los números no son iguales")
// }

//================OPERADORES LÓGICOS================

//================AND================
// const USUARIO = prompt("Ingresa tu usuario")
// const PASSWORD = prompt("Ingresa tu contraseña")

// if(USUARIO == "admin" && PASSWORD == "123456"){
//     alert("Bienvenido" + USUARIO)
// }else{
//     alert("Usuario o contraseña incorrectos")
// }

//================OR================
// const NOMBRE = prompt("Ingresa tu nombre")
// const ANIO = prompt("Ingresa tu año de nacimiento")
// const ANIO_ACTUAL = 2022

// if(NOMBRE == "" || ANIO == ""){
//     alert("Ingrese toda la información")
// }else{
//     const EDAD = ANIO_ACTUAL - ANIO
//     alert("Hola " + NOMBRE + " tu edad es: "+ EDAD)
// }

//================NOT================
// const EDAD = prompt("Ingresa tu edad")

// let esMayor = EDAD >= 18

// console.log("Variable original: "+ esMayor)
// console.log("Variable aplicando operador not: "+ !esMayor)


//================CONDICIONALES COMPUESTAS AND OR================
let valorUno = true
let valorDos = true
let valorTres = true

if(valorUno == true && (valorDos == false || valorTres == false)){
    alert("verdadero")
}else{
    alert("falso")
}