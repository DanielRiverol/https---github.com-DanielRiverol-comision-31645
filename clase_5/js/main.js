//por nombre de etiquta
const h2 = document.getElementsByTagName("h2");
/* for (let i = 0; i < h2.length; i++) {
  console.log(h2[i].innerHTML);
} */
//por clase
const titulo = document.getElementsByClassName("titulo")[0];
//por id
const titulo2 = document.getElementById("titulo_dos");
/* let ingreso = prompt("ingresa tu nombre")


titulo2.innerText = "Hola " + ingreso
 */

const divContenedor = document.getElementById("contenedor");
divContenedor.className = "green";
divContenedor.innerHTML = "<p>Esto es texto dinamico</p>";

let parrafo = document.createElement("p");

parrafo.innerHTML = "Texto de <strong>prueba</strong> ";

divContenedor.appendChild(parrafo);

parrafo.remove();

const inputNombre = document.getElementById("nombre");
inputNombre.value = "Juan";
inputNombre.className = "green";
//console.log(inputNombre.getAttribute("class"))
inputNombre.setAttribute("type", "text");

/* let producto = {
  nombre: "Arroz",
  precio: 234,
};

let concatenado =
  "Nombre producto: " + producto.nombre + " precio: " + producto.precio;

let template = `Nombre producto 
${producto.nombre} 
precio: 
${producto.precio * 10}`;

console.log(concatenado);
console.log(template);

divContenedor.innerHTML = `
<h3>Nombre producto</h3> ${producto.nombre}
<p>Precio: $ ${producto.precio}</p>
`;
 */

const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100 , img:"https://ichef.bbci.co.uk/news/640/cpsprodpb/150EA/production/_107005268_gettyimages-611696954.jpg"}];
/* 
for (const producto of productos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>
                            <img src=${producto.img} alt="img">
                            `;
    document.body.appendChild(contenedor);
} */
const btnEnviar = document.querySelector("#enviar")

/* btnEnviar.addEventListener("click", ()=>{
  
  divContenedor.innerText = inputNombre.value

}) */

btnEnviar.onclick=()=>{
  divContenedor.innerText = inputNombre.value
}

inputNombre.addEventListener("keyup",()=>{
  divContenedor.innerText = inputNombre.value
})
