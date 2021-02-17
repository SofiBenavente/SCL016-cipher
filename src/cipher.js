// Dentro de la constante cipher se define la función encode y decode
// dentro de las funciones se define la variable resultado que indica el texto ingresado y  la variable ascii

const cipher = {
  encode:(offset,message) => {
  let resultado="";
  let ascii=0;
 
    for(let i=0; i< message.length; i++){

    ascii = message.charCodeAt(i);
      if(ascii>=65 && ascii<=90){
        ascii=(ascii-65+parseInt(offset))%26+65;
   }
      if(ascii>=97 && ascii<=122){
        ascii=(ascii-97+parseInt(offset))%26+97;
   }
resultado = resultado + String.fromCharCode(ascii);
  }
        return resultado;
},

decode:(offset,message) => {
  let resultado="";
  let ascii=0;
 
    for(let i=0; i< message.length; i++){

    ascii = message.charCodeAt(i);
      if(ascii>=65 && ascii<=90){
        ascii=(ascii+65-parseInt(offset))%26+65;
   }
      if(ascii>=97 && ascii<=122){
        ascii=(ascii+33-parseInt(offset))%26+97;
   }
resultado = resultado + String.fromCharCode(ascii);
  }
        return resultado;
}


}

  

    
export default cipher;
