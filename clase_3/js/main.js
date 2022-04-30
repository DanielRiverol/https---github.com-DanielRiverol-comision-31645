//Funciones
//declaracion
/* function saludar(){
    let nombreIngresado= prompt("Ingresa tu nombre");
    alert("Hola " + nombreIngresado);
}  */
//con parametros
/* let nombre = "Manuel";
let mensaje= "Holas como estas?"

function saludar(nombre, mensaje) {
  console.log(mensaje + " " + nombre);
}

//llamada
saludar("Como estas?", "Abel");
saludar("Mariana", "Hola bienvenida");
saludar("Lucia", "Hi!");

saludar(nombre, mensaje); */

/* let n1= parseInt(prompt("Ingresa un numero"))
let n2= parseInt(prompt("Ingresa un numero")) */
//let resultado=0
//console.log(resultado)
function sumar(num1, num2) {
  return num1 + num2;
}

function mostrar(mensaje) {
  console.log(mensaje);
}

/* let resultado = sumar(13, 23);
let resultado2 = sumar(12, 43); */
/* alert(resultado)
console.log(resultado);
console.log(resultado2); */
/* 
function calcular(num1, num2, operador) {
  switch (operador) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
        if(num2==0){
            return "NO es posible "
        }else{
            return num1 / num2;
        }
    default:
      return 0;
  }
}

console.log(calcular(23, 34, "+"))
console.log(calcular(3, 56, "-"))
console.log(calcular(2, 4, "*"))
console.log(calcular(2, 5, "/"))
console.log(calcular(2, 4))
 */

//Scope o alcance de las variables

/* let result="hola"

function restar(num1 , num2){
    let result=0;
    result = num1 - num2;
    return result;
}

console.log(restar(13,4))

console.log(result) */

const suma = function (num1, num2) {
  return num1 + num2;
};
const IVA = (x) => x * 1.21;

const resta = (num1, num2) => {
  return num1 - num2;
};

//console.log(IVA(23));

//OBJETOS
//literal
/* const persona1 = {
  nombre: "Dante",
  edad: 34,
  direccion: "Calle falsa 123",
  casado: false,
};
const persona2 = {
  nombre: "Julieta",
  edad: 24,
  direccion: "Calle verdadera 1220",
};

console.log(persona1);
//notacion de punto
console.log(persona1.nombre);
console.log(persona2.nombre);

//asignar casado
persona2.casado = true
persona1.nombre="Manuel";
console.log(persona1.nombre);


console.log(persona2.casado);
/* console.log(persona1.edad);
console.log(persona1.direccion);
console.log(persona1.casado); */

//notacion de corchetes
/* console.log(persona1["nombre"]); */ 

//funcion constructora
 function Persona(nombre, edad, direccion){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;

        this.hablar= ()=>{
            console.log("Hola soy " + this.nombre);
        }
 }


 const persona1 = new Persona("Maria", 23,"Tinogasta 34");
 const persona2 = new Persona("Jose");

 persona1.hablar()
 persona2.hablar()
 console.log()



/* 
 console.log(persona1.nombre);
 console.log(persona1.edad);
 console.log(persona1.direccion);
 persona2.edad = 34
 console.log(persona2.edad); */