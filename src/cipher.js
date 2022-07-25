const cipher = {
  encode: function cifrar(mensaje, desplazamiento) {
    let resultado = "";
    for (var i = 0; i < mensaje.length; i++) {
      let mensajeCifrado = ((mensaje.charCodeAt(i) + desplazamiento - 65) % 26) + 65;
      resultado += String.fromCharCode(mensajeCifrado);
    }
    document.getElementById("inputCifrado-1").innerHTML = resultado;
    return resultado;
  },
};

export default cipher; /*archivo original */

