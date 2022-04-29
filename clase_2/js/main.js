//Esto es un comentario
/* Comentario en varias lineas */

//ES6
let numeroUno;

numeroUno = 4;

let nombre = "Maxi";

const PI = 3.141516;

let nombreUsuario1 = prompt("Ingresa tu nombre");
let mensaje = "Hola ";

alert(mensaje + nombreUsuario1);

//Condicionales
//si (true o false)entonces operacion
let haceFrio = "NO";

//Devuelve true o false
console.log(haceFrio == "NO");

if (haceFrio == "NO") {
  //operación
  console.log("NO me pongo el buzo");
}

//Operadores <, > ,==,===,<=, >=
//NOT !

let nota = "6";

console.log(nota == "6");

if (nota == "6") {
  console.log("Aprobado");
} else {
  console.log("NO Aprobado");
}

//Operadores Logicos AND (&&) las dos comparaciones tienen que ser verdaderas para que ingrese al condicional
//
//Operadores Logicos OR (||) cualquiera de las dos pueden ser verdaderas y el condicional se ejecuta

let nombreUsuario = prompt("ingresa tu nombre");
let password = prompt("ingresa tu password");

//Si cualquiera de los dos está vacío saluda
if (nombreUsuario != "" || password != "") {
  console.log("Bienvenido/a " + nombreUsuario);
} else {
  console.log("No ingresaste tu usuario o contraseña");
}
//Validación de un usuario
let validacion =
  nombreUsuario === "Juan" ||
  nombreUsuario === "JUAN" ||
  nombreUsuario == "juan";

if (validacion) {
  console.log("Bienvenido Juan");
} else {
  console.log("No te conozco");
}
/* 
let nota = 6;

if (nota < 6) {
  console.log("NO Aprobado");
} else if (nota >= 6 && nota <= 9) {
  console.log("Bien ahi");
} else {
  console.log("Felicidaddes nota maxima");
}
 */

//FOR
/* estructura del for... for(variable inicial; condición; incremento){
                                  código a ejecutar
                                          }*/

let ingreso = parseInt(prompt("Ingresa un numero"));
let limite = parseInt(prompt("Ingresa un numero"));

for (let i = 1; i <= limite; i++) {
  console.log(
    "Resultado " + ingreso + " X " + i + " es igual a " + ingreso * i
  );
}

//Mientras o while

let ingreso1 = prompt("Ingrese un producto");

while (ingreso1 != "SALIR") {
  console.log("El producto ingresado es " + ingreso1);
  ingreso1 = prompt("Ingresa otro producto");
}

//Do while se ejecuta aunque sea una vez el código
let contador = 6;

do {
  //operacion
  console.log(contador);
  contador++;
} while (contador <= 5);

//Switch
let num = prompt("Ingresa un numero del 1 al 4");
switch (num) {
  case "1":
    alert("Ingresaste el 1");
    break;
  case "2":
    alert("Ingresaste el 2");
    break;

  case "3":
    alert("Ingresaste el 3");
    break;

  case "4":
    alert("Ingresaste el 4");
    break;

  default:
    alert("Valor no valido");
    break;
}

let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while (entrada != "ESC") {
  switch (entrada) {
    case "ANANA":
    //si no ponemos break se ejecutan los dos códigos seguidos ingresando el  case 1 o el case 2
    case "MANZANA":
      alert("Es una fruta");
      break;

    default:
      alert("NO es una fruta");
      break;
  }
  entrada = prompt("Ingresar un nombre");
}
