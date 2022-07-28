import cipher from "./cipher.js";

let botonCifrar = document.getElementById("cifrar-btn");
let botonDecifrar = document.getElementById("decifrar-btn");

botonCifrar.addEventListener(
  "click",
  function () {
    let mensaje = document.getElementById("textoACifrar").value.toUpperCase();
    let offset = document.getElementById("desplazamiento").value;
    document.getElementById("inputCifrado-1").value = cipher.encode(parseInt(offset),mensaje);
  },false
);

botonDecifrar.addEventListener(
  "click", 
  function(){
    let mensaje = document.getElementById("textoACifrar").value.toUpperCase();
    let offset = document.getElementById("desplazamiento").value;
    document.getElementById("inputCifrado-1").value = cipher.decode(parseInt(offset),mensaje);
  },false
);

