

var formData = document.querySelector(".formData");
var errorAlert = document.getElementById("errorAlert");
var errorAlertText = document.getElementById("errorAlertText");

let listError = " ";

formData.onsubmit = function (event) {
  event.preventDefault();  
  console.log("test");
  var n = formData.elements[0];
  var e = formData.elements[1];
  var na = formData.elements[2];

  var nombre = n.value;
  var edad = e.value;

  errorAlertText.innerHTML = "";    
  errorAlert.style.display = "none";
  let listError = "<ul>";

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)


  if (nombre.length === 0) {
    n.classList.add("error");
    errorAlert.style.display = "block";
    listError += "<li> Se debe escribir un nombre válido.</li>";   

  }
  if (edad < 18 || edad > 120) {  
    e.classList.add("error")
    errorAlert.style.display = "block";
    listError += "<li> Debes ser mayor de edad y/o escribir una edad válida.</li>";   
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  e.classList = "";
  n.classList = "";
  n.value = "";   
  e.value = "";
  }

  listError += "</ul>";
  errorAlertText.insertAdjacentHTML("beforeend", listError);

}

// var botonBorrar = document.createElement("button")    //Repeat button Eliminar-Invitado
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// var corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista")   //Modified added to add
lista.appendChild(elementoLista)

// var spanNombre = document.createElement("span")       // Repeat var of the name
// var inputNombre = document.createElement("input")
// var espacio = document.createElement("br")
// spanNombre.textContent = "Nombre: "
// inputNombre.value = nombre
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
  var spanNombre = document.createElement("span")      //This part show the name
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {

botonBorrar.parentNode.remove()
  }
}