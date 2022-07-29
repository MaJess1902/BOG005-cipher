const cipher = {
  encode: function cifrar(offset, mensaje) {
    if (offset == null || mensaje == [] || offset === 0) {
      throw new TypeError("Debes darme un número de desplazamiento y un mensaje");
    }
    let resultado = "";
    for (var i = 0; i < mensaje.length; i++) {
      let mensajeCifrado = ((mensaje.charCodeAt(i) + offset - 65) % 26) + 65;
      resultado += String.fromCharCode(mensajeCifrado);
    }
    return resultado;
  },
  decode: function decifrar(offset, mensaje) {
    if (offset == null || mensaje == [] || offset === 0) {
      throw new TypeError("Debes darme un número de desplazamiento y un mensaje");
    }
    let resultado = "";
    for (var i = 0; i < mensaje.length; i++) {
      let mensajeCifrado = ((mensaje.charCodeAt(i) + 65 - offset) % 26) + 65;
      resultado += String.fromCharCode(mensajeCifrado);
    }
    return resultado;
  },
};

export default cipher; /*archivo original */
