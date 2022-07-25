import cipher from "./cipher.js";

let botonCifrar = document.getElementById("cifrar-btn");
let botonDecifrar = document.getElementById("cifrar-btn");

botonCifrar.addEventListener(
  "click",
  function () {
    let mensaje = document.getElementById("textoACifrar").value.toUpperCase();
    let desplazamiento = document.getElementById("desplazamiento").value;
    document.getElementById("inputCifrado-1").innerHTML = cipher.encode(mensaje, parseInt(desplazamiento));
  },
  false
);

