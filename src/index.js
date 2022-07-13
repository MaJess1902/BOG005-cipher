import cipher from "./cipher.js";

let botonCifrar = document.getElementById('cifrar-btn');
botonCifrar.addEventListener("click", cifrar);

function cifrar() {
  let mensaje = document.getElementById("textoACifrar").value.toUpperCase();
//   this.value = this.value.toUpperCase();
  console.log(mensaje);
}



