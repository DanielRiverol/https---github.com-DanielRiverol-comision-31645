const form = document.querySelector("form");
const inputNombre = document.querySelector("#nombre"),
  inputDescripcion = document.querySelector("#descripcion"),
  inputPrecio = document.querySelector("#precio"),
  inputImg = document.querySelector("#img"),
  btnGuardar = document.querySelector("#btnGuardar");

  const contenedor = document.getElementById("contenedor")


  //contenedor.innerHTML= `<p>Este es contenido dinaicvo</p>`

const productos = [];

class Producto {
  constructor(nombre, descripcion, precio, img) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.img = img;
  }
}

function cargarProducto(producto){
    return productos.push(producto)
}
function crearProducto(nombre, descripcion, precio, img) {
  nombre = inputNombre.value;
  descripcion = inputDescripcion.value;
  precio = inputPrecio.value;
  img = inputImg.value;

  return new Producto(nombre, descripcion, precio, img);
}

function crearHTML() {
  let html;
for (const producto of productos) {
   
    html = `<div class="col s4 m3">
    <div class="card">
  <div class="card-image">
    <img class="responsive-img" src=${producto.img} />
    <span class="card-title">${producto.nombre}</span>
  </div>
  <div class="card-content">
    <p>
      ${producto.descripcion}
    </p>
    <p>$${producto.precio}</p>
  </div>
  <div class="card-action">
    <a href="#" class="btn">Comprar</a>
  </div>
  </div>
  </div>`;
 console.log(productos);
}
  

contenedor.innerHTML += html
}
//contenedor.style.color="blue";

btnGuardar.addEventListener("click", ()=>{
    const producto = crearProducto(nombre,descripcion,precio, img );
    cargarProducto(producto)
    crearHTML(productos)
})