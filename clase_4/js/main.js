/* //Funcion constructora
/* function Producto(nombre, precio, stock, disponible) {
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;
  this.disponible = disponible;
  //Vender
  this.vender = (cantidad) => {
    this.stock = this.stock - cantidad;
    if (this.stock <= 0) {
      return "No hay stock suficiente";
    } else {
      return this.precio * cantidad;
    }
  };
  //Calcular Stock
  this.calcularStock = function () {
    if (this.stock <= 0) {
      return (this.disponible = false), (this.stock = 0);
    } else {
      return this.stock;
    }
  };
} */
//Clase constructora
/* class Producto1 {
  constructor(nombre, precio, stock, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.disponible = disponible;
  }
  vender(cantidad){
    this.stock = this.stock - cantidad;
    if (this.stock <= 0) {
      return "No hay stock suficiente";
    } else {
      return this.precio * cantidad;
    }
  };
  calularStock(){
    if (this.stock <= 0) {
      return this.disponible = false, this.stock = 0;
    } else {
      return this.stock;
    }

  }
} */


//ARRAYS
//vacio
/* const numeros = [1, 3, 4,56,24,4,12,89,0,34];
console.log(numeros);

console.log("El tamaño del array es :" + numeros.length);

for (let index = 0; index < numeros.length; index++) {
  console.log(numeros[index]);
} */

let arrayString = ["Horacio", "Maria", "Pablo", "Paola"];
//console.log(arrayString);
//agregar elem al final del array
arrayString.push("Florencia", "Julian", "Mauricio")

//Eliminar elem final
//arrayString.pop()

//console.log(arrayString);
// eliminar elem al pincipio
arrayString.shift()
//console.log(arrayString);
let hasta = 1
//Elnimna element del medio
/* arrayString.splice(0,3)
arrayString.splice(1,2) */
/* 
console.log(arrayString.join(" "));
for (let index = 0; index < arrayString.length; index++) {
  console.log(arrayString[index]);
} */

//obj
/* const producto1={
  nombre:"Arroz",
  precio: 23
}
const producto2={
  nombre:"papas",
  precio: 30
} */
/* console.log(producto1);
console.log(producto2);
//array
const alacena=[producto1, producto2] 
console.log(alacena);

for (let iterador of alacena) {
  console.log(iterador.nombre);
  console.log(iterador.precio);
} */


/*
class Producto {
  constructor(nombre, precio) {
      this.nombre  = nombre.toUpperCase();
      this.precio  = parseFloat(precio);
      this.vendido = false;
  }
  sumaIva() {
      this.precio = this.precio * 1.21;
  }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));

console.log(productos);

//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos){
console.log(producto);
}
  




 */

/*1-Crear un array vacio llamado productos
  2-crear una funcion crearProductos() que construya un objeto producto y pida las propiedades del producto.
  3-Crear una funcion que agregue los productos al array productos*/
 


  const numeros =[1,22,3,4,5,6,7,7,8]

numeros.forEach((papa)=>{
  console.log(papa);
})

let result = numeros.find((el)=> el === 7)
console.log(result);
