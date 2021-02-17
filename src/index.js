
import cipher from './cipher.js';

// definiendo variables a trabajar
   const desplazar = document.getElementById("offset");
   const textCipher = document.getElementById("yourText");
   const codificar = document.getElementById("cifrar");
   const decodificar = document.getElementById("descifrar");
   
// Definiendo la función para definir el cifrado
// Se declara la varia text y numb y se le da valor para que al momento de ingresar los datos, se pueda codificar en la siguiente pestaña
// Las dos funciones descritas en index.js son muy similares, sólo cambia el nombre y la función cipher. que codifica o decodifica cada texto ingresado.
// Finalmente, se agrega la línea de código que llama al boton de cifra o descifra cada texto.

let cipherCodificar = () => {

   let text = textCipher.value;
   let numb = desplazar.value;

   let textoCifrado = cipher.encode(numb, text); 
   document.getElementById("newText").innerHTML = textoCifrado;
}

   codificar.addEventListener("click", cipherCodificar);

   
   
let cipherDecode = () => {
   let text = textCipher.value;
   let numb = desplazar.value;

   let textoDescifrado= cipher.decode(numb, text);
   document.getElementById("newText").innerHTML = textoDescifrado;
}

decodificar.addEventListener("click", cipherDecode);
